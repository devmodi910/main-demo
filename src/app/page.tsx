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
                  communications at any time. For more information, check out
                  our{" "}
                  <Link
                    href="/webgrader"
                    className="text-blue-400 hover:underline"
                  >
                    Privacy Policy.
                  </Link>
                </p>
              </form>

              <Link
                href="/webgrader"
                className="bg-orange-500 text-white px-5 py-2 rounded-sm font-normal w-40 transition-all duration-300 transform "
              >
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

      {/* <div id="website-next" className="md:mt-15 mx-80">
        <div className="flex justify-between gap-8 p-4">
          <div className="w-1/2"> 
            <h2 className="text-3xl text-[rgb(46,71,93)] font-medium">Get Your Website Rating in Seconds</h2>
            <p className="text-sm text-[rgb(46,71,93)] pt-2 mt-10">HubSpot's free website grader makes understanding website performance easy. The hardest part of building a site is often the guesswork. Which changes are important, and which aren’t? It can sometimes feel impossible to tell. Our online grader demystifies the whole process. Learn about your page performance, security, search engine optimization (SEO), and mobile experience. Discover what makes your site strong and uncover new opportunities for the future.</p>
          </div>

          <div className="w-1/2">
            <Image className="h-auto w-full items-center"
              src="/images/website-performance-rating.png"
              alt="HubSpot Logo"
              width={200}
              height={200}
            />
          </div>
        </div>Name
      </div> */}
      <div className="bg-white font-sans ">
        {/* Main Flex Container */}
        <div className="flex flex-col-reverse md:flex-row gap-8 mb-16 md:mt-10 md:mx-40 lg:mt-15 lg:mx-80 sm:mt-6 sm:mx-4">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-slate-700 mb-4 text-center md:text-left">
              Get Your Website Rating in Seconds
            </h2>
            <p className="text-sm mb-3 text-slate-600 text-center md:text-left">
              HubSpot&#x27;s free website grader makes understanding website
              performance easy. The hardest part of building a site is often the
              guesswork. Which changes are important, and which aren&#x27;t? It
              can sometimes feel impossible to tell. Our{" "}
              <span className="text-teal-600 hover:text-teal-700 transition-colors">
                online grader
              </span>{" "}
              demystifies the whole process.
            </p>
            <p className="text-sm text-slate-600 text-center md:text-left">
              Learn about your page performance, security, search engine
              optimization (SEO), and mobile experience. Discover what makes
              your site strong and uncover new opportunities for the future.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 items-center">
            <Image
              className="h-auto w-full rounded-lg"
              src="/images/website-performance-rating.png"
              alt="Demo Performance Image"
              width={400}
              height={300}
            />
          </div>
        </div>

        {/* More Information Section */}
        <div className="mb-6 bg-slate-100">
          <h3 className="text-xl font-semibold text-center text-slate-700 mb-6">
            More Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-100">
            {[
              {
                title: "What is a website checker?",
                content:
                  "A website checker evaluates your site's performance, security, SEO, and mobile responsiveness, providing an overall score and recommendations for improvement.",
              },
              {
                title: "How to optimize a website for SEO?",
                content:
                  "To optimize for SEO, focus on relevant keywords, quality content, proper meta tags, fast loading times, mobile friendliness, and building quality backlinks.",
              },
              {
                title: "Why is website performance important?",
                content:
                  "Website performance directly impacts user experience, conversion rates, search engine rankings, and bounce rates. Faster sites lead to higher engagement and better business results.",
              },
              {
                title: "Why is website grading important?",
                content:
                  "Website grading helps identify strengths and weaknesses, prioritize improvements, benchmark against competitors, and track progress over time to ensure continuous optimization.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group border border-gray-400 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <summary className="flex items-center p-4 cursor-pointer bg-slate-100 text-slate-700 font-medium">
                  <span className="text-teal-600 mr-2 transform group-open:rotate-90 transition-transform duration-300">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                  {item.title}
                </summary>
                <div className="p-4 bg-slate-100 text-slate-600 text-sm">
                  {item.content}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
