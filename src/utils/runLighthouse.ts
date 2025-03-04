"use server";

import { launch } from "chrome-launcher";
import { createRequire } from "module";
import { redirect } from "next/navigation";

const require = createRequire(import.meta.url);
const lighthouse = require("lighthouse").default;

export async function runLighthouse(url: string) {
  if (!url) {
    return { error: "URL is required" };
  }

  let chrome;

  try {
    chrome = await launch({ chromeFlags: ["--headless"] });

    const options: Partial<import("lighthouse").Flags> = {
      logLevel: "info",
      output: "json",
      onlyCategories: ["performance"],
      port: chrome.port,
    };

    const result = await lighthouse(url, options);

    if (!result?.lhr?.audits) {
      throw new Error("Failed to retrieve Lighthouse audit results");
    }

    const totalByteWeight = result.lhr.audits["total-byte-weight"]?.numericValue ?? 0;
    const maxPageSize = 2 * 1024 * 1024; // 2MB threshold

    let pageSizeScore = Math.max(0, 100 - (totalByteWeight / maxPageSize) * 100);
    pageSizeScore = Math.round(pageSizeScore);
    console.log("Page Size Score:", pageSizeScore);

    return {
      url,
      totalPageSize: `${(totalByteWeight / 1024).toFixed(2)} KB`,
      pageSizeScore,
    };
  } catch (error) {
    return { error: (error as Error).message };
  } finally {
    if (chrome) {
      await chrome.kill();
    }
  }
}
