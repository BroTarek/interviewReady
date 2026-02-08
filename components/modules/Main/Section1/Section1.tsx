import React from 'react'
import Image from 'next/image'

const Section1 = () => {
    return (
        <section className="relative w-full min-h-[100vh] flex flex-col justify-center overflow-hidden bg-white dark:bg-black font-['Lato']">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Main Background Vector/Image */}
                <div className="absolute inset-0 bg-[#D9D9D9] bg-opacity-10"></div>
                <div
                    className="absolute inset-0 bg-[url('/0db2115d567b03a84d54cb9d87c176aabf8f6ab1.jpg')] bg-cover bg-center bg-no-repeat filter grayscale opacity-20mix-blend-overlay"
                />
                {/* Decorative Gradient Elements (Simplified representation of Frame 130/131/etc) */}
                <div className="absolute top-[-50px] left-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#594D1C]/20 to-[#BEA036]/20 blur-3xl rounded-full"></div>
                <div className="absolute top-[40%] right-[-100px] w-[600px] h-[600px] bg-gradient-to-r from-[#594D1C]/10 to-[#BEA036]/10 blur-3xl rounded-full rotate-45"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center h-full pt-20">

                {/* Left Column: Text Content */}
                <div className="w-full md:w-3/5 space-y-8">
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-[70px] font-bold text-black color-[#BEA036] dark:text-white leading-[96.5%]">
                        e-RAMO Agency For   <span className="text-[#BEA036]">Digital Soltions</span> <span className="text-[#BEA036]">|</span>
                    </h1>

                    {/* Subtext/Paragraph */}
                    <p className="text-[22px] leading-[170%] font-normal text-[#6F6D71] dark:text-gray-300 max-w-3xl text-justify">
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <button className="w-[248px] h-[56px] rounded-[18px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] text-white text-[22px] font-normal hover:opacity-90 transition-opacity shadow-lg">
                            GET START
                        </button>
                    </div>
                </div>

                {/* Right Column: Visual Elements (Vector 2 Layout) */}
                <div className="w-full md:w-2/5 relative mt-16 md:mt-0 flex justify-center items-center">
                    {/* Placeholder for the rotated Vector 2 / Phone illustration */}
                    <div className="relative w-full max-w-[500px] flex justify-center items-center">
                        <Image
                            src="/Vector 2.png"
                            alt="Hero Visual"
                            width={500}
                            height={600}
                            className="object-contain w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Features Bar (Matching positioning around 1800px in CSS but placing here logicially for Section 1 if desired, or omitting if strictly following page flow) */}
            {/* Leaving out strictly below-fold content for now as requested Section 1 */}
        </section>
    )
}

export default Section1