import React from "react";
import Image from "next/image";
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Image
        src="/images/InterstitialBlobs.png"
        alt="HubSpot Logo"
        width={500}
        height={500}
      className="w-auto h-auto"/>
    </div>
  );
}
