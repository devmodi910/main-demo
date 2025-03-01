import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../components/Button";

export default function Component() {
  return (
    <div id="website">
      {/* Main Container */}
      <div className="relative min-h-screen bg-[#2D3E50] font-sans overflow-hidden">
        {/* Background Images (Visible in md+ screens, hidden in sm) */}
        <div className="hidden md:block absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/blobsLeft.png')] bg-left-top bg-no-repeat bg-contain md:bg-auto opacity-100"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[url('/images/blobsRight.png')] bg-right-bottom bg-no-repeat bg-contain md:bg-auto opacity-100"></div>
        </div>

        {/* Header */}
        <header className="relative flex justify-end items-center p-6">
          <div className="flex gap-2">
            <Button />
            <button className="bg-transparent border border-white text-white px-4 py-3 rounded-full text-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 flex flex-row">
              FAQ
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative flex flex-col items-center justify-center pt-16 pb-16 px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/hubspot-tools-logo.png"
                alt="HubSpot Logo"
                width={150}
                height={40}
              />
            </div>
            <h1 className="text-lg max-w-md mx-auto md:text-5xl font-bold text-white mb-2">
              Website Grader<sup className="text-xl md:text-3xl">®</sup>
            </h1>
            <p className="text-white text-xs md:text-base max-w-md mx-auto mb-8">
              Grade your website in seconds. Then learn how to improve it for
              free.
            </p>

            {/* Input Form */}
            <div className="max-w-md mx-auto w-full">
              <form>
                <input
                  type="url"
                  placeholder="Website"
                  className="w-full p-3 mb-4 rounded bg-transparent text-center border-b-2 border-slate-500 text-white focus:border-blue-400 outline-none transition-colors focus:placeholder-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 mb-4 rounded bg-transparent text-center border-b-2 border-slate-500 text-white focus:border-blue-400 outline-none transition-colors focus:placeholder-transparent"
                />
              

              <p className="text-white text-xs mb-6 text-left">
                We're committed to your privacy. HubSpot uses the information
                you provide to us to contact you about our relevant content,
                products, and services. You may unsubscribe from these
                communications at any time. For more information, check out our{" "}
                <Link href="/webgrader" className="text-blue-400 hover:underline">
                  Privacy Policy.
                </Link>
                
              </p>
              </form>

              <Link href="/webgrader" className="bg-orange-500 text-white px-5 py-2 rounded-sm font-normal w-40 transition-all duration-300 transform ">
                Get your score
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative text-center text-white text-sm">
          <div className="flex justify-center items-center gap-2 mb-1 underline-offset-auto">
            <Link
              href="#"
              className="underline transition-all duration-300 hover:no-underline"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="#"
              className="underline transition-all duration-300 hover:no-underline"

            >
              Legal stuff
            </Link>
          </div>
          <p>Powered by Google Lighthouse</p>
        </footer>
      </div>
    </div>
  );
}
