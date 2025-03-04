"use server";

import { runLighthouse } from "@/utils/runLighthouse";

export async function fetchWebsiteDetails(url: string) {
  return await runLighthouse(url);
}
