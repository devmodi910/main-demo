import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "fr", "es"], // Add supported languages
    defaultLocale: "en", // Set default language
  },
  /* Other config options here */
};

export default nextConfig;
