import React from "react"

export default function Component ()  {
    return (
        <div id="webcrumbs">
            <div className="w-[1200px] min-h-[700px] bg-gradient-to-br from-slate-800 to-slate-900 font-sans relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-orange-400 opacity-80 blur-xl -translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute top-0 left-1/4 w-[250px] h-[250px] rounded-full bg-blue-400 opacity-80 blur-xl"></div>
                <div className="absolute top-1/3 left-0 w-[200px] h-[200px] rounded-full bg-red-400 opacity-70 blur-xl"></div>
                <div className="absolute top-1/2 left-0 w-[180px] h-[180px] rounded-full bg-teal-400 opacity-80 blur-xl"></div>

                {/* Bottom right blobs */}
                <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-orange-400 opacity-80 blur-xl translate-x-1/4 translate-y-1/4"></div>
                <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] rounded-full bg-teal-400 opacity-80 blur-xl"></div>
                <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] rounded-full bg-red-400 opacity-70 blur-xl"></div>

                {/* Header */}
                <header className="relative flex justify-end items-center p-6">
                    <div className="flex gap-2">
                        <div className="relative group">
                            <button className="flex items-center gap-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                                <span className="material-symbols-outlined">language</span>
                                <span>English</span>
                                <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
                            </button>
                            <div className="absolute hidden group-hover:block mt-2 w-40 bg-white rounded-md shadow-lg z-10 right-0">
                                <ul className="py-1">
                                    <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors">
                                        English
                                    </li>
                                    <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors">
                                        Español
                                    </li>
                                    <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors">
                                        Français
                                    </li>
                                    <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors">
                                        Deutsch
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className="bg-transparent border border-slate-500 text-white px-4 py-2 rounded-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                            FAQ
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="relative flex flex-col items-center justify-center pt-8 pb-16 px-4">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <svg className="w-32 h-12" viewBox="0 0 100 30" fill="white">
                                    <path d="M18.5,0C8.3,0,0,8.3,0,18.5S8.3,37,18.5,37S37,28.7,37,18.5S28.7,0,18.5,0z M18.5,28c-5.2,0-9.5-4.3-9.5-9.5 s4.3-9.5,9.5-9.5s9.5,4.3,9.5,9.5S23.7,28,18.5,28z" />
                                    <path d="M62,10h-9.5v18h4v-6H62c3.9,0,7-3.1,7-7v0C69,13.1,65.9,10,62,10z M62,18h-5.5v-4H62c1.1,0,2,0.9,2,2v0 C64,17.1,63.1,18,62,18z" />
                                    <path d="M90.6,10h-8.1c-2.5,0-4.5,2-4.5,4.5v9c0,2.5,2,4.5,4.5,4.5h8.1c2.5,0,4.5-2,4.5-4.5v-9C95,12,93,10,90.6,10z M90.6,24 h-8.1c-0.3,0-0.5-0.2-0.5-0.5v-9c0-0.3,0.2-0.5,0.5-0.5h8.1c0.3,0,0.5,0.2,0.5,0.5v9C91,23.8,90.8,24,90.6,24z" />
                                    <path d="M43,10h3.8l6,18h-4.2L47.5,24h-5l-1.2,4H37L43,10z M46.2,20l-1.7-5.5L42.8,20H46.2z" />
                                    <path d="M78,24h-7v-4h6v-4h-6v-2h7v-4h-7.4H70h-3v18h3h0.6H78V24z" />
                                </svg>
                                <span className="absolute -right-6 top-0 bg-slate-700 text-white text-[8px] px-1 py-0.5 rounded-sm">
                                    TOOLS
                                </span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Website Grader<sup className="text-xl">®</sup>
                        </h1>
                        <p className="text-white text-lg max-w-md mx-auto mb-8">
                            Grade your website in seconds. Then learn how to improve it for free.
                        </p>

                        <div className="max-w-md mx-auto w-full">
                            <input
                                type="url"
                                placeholder="Website"
                                className="w-full p-3 mb-4 rounded bg-transparent border-b-2 border-slate-500 text-white focus:border-blue-400 outline-none transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 mb-4 rounded bg-transparent border-b-2 border-slate-500 text-white focus:border-blue-400 outline-none transition-colors"
                            />

                            <p className="text-white text-sm mb-6 text-left">
                                We're committed to your privacy. HubSpot uses the information you provide to us to
                                contact you about our relevant content, products, and services. You may unsubscribe from
                                these communications at any time. For more information, check out our{" "}
                                <a href="#" className="text-blue-400 hover:underline">
                                    Privacy Policy
                                </a>
                                .
                            </p>

                            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-md font-medium w-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                Get your score
                            </button>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="relative text-center text-white text-sm py-4">
                    <div className="flex justify-center items-center gap-2 mb-1">
                        <a href="#" className="hover:underline transition-all duration-300 hover:text-blue-400">
                            Privacy Policy
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:underline transition-all duration-300 hover:text-blue-400">
                            Legal stuff
                        </a>
                    </div>
                    <p>Powered by Google Lighthouse</p>
                </footer>
            </div>
        </div>
    )
}
