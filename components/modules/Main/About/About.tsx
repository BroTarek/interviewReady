import React from 'react'
import Image from 'next/image'
import AboutCards from './AboutCards'

const About = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden font-['Lato']">
            <div className="container mx-auto px-6 md:px-12 space-y-24">

                {/* Who We Are Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Who we are and what <span className="text-[#BEA036]">we do ?</span>
                        </h2>

                        <div className="space-y-4 text-gray-800 dark:text text-justify leading-relaxed text-lg">
                            <p>
                                We in e-RAMO truly care about our users and our digital solutions. For many businesses, your website is the main line of communication between your customers and your company.
                            </p>
                            <p>
                                Let's make something great together that deserve your company. We design custom websites based on any requirements from 5 pages to 500 pages (or more). We offer Static websites & Dynamic. We've designed and built huge websites with Content Managed Backend Systems ( CMS ) and an array of different functionalists that fit client's needs.
                            </p>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
                            <Image
                                src="/about-image.png"
                                alt="Office working environment"
                                fill
                                className="object-cover"
                            />
                            {/* Carousel Indicators Overlay */}
                            <div className="absolute bottom-8 left-12 flex gap-2 z-10">
                                <div className="h-1.5 w-12 bg-[#BEA036]"></div>
                                <div className="h-1.5 w-12 bg-white"></div>
                                <div className="h-1.5 w-12 bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Features List */}
                <div className="flex flex-wrap justify-between items-center gap-4 border-t border-transparent pt-8">
                    {[
                        "Award-winning design",
                        "Easy to Customize pages",
                        "Super Fast Customer support",
                        "Powerful Performance"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-600 font-medium text-sm md:text-base cursor-pointer hover:text-[#BEA036] transition-colors">
                            <span className="w-2 h-2 rounded-full bg-[#BEA036]"></span>
                            {item}
                        </div>
                    ))}
                </div>

                {/* About Cards */}
                <AboutCards />
            </div>
        </section>
    )
}

export default About