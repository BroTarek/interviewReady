import React from 'react';
import Image from 'next/image';

const HowWeWork = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden font-['Lato']">
            {/* Background Decor - Circles and Dots */}
            {/* Right side circle background */}
            <div className="absolute top-[80px] -right-[260px] w-[522px] h-[522px] border border-[#BEA036] border-opacity-10 rounded-full hidden xl:block pointer-events-none">
                <div className="absolute top-[1/2] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[286px] h-[286px] bg-[#D9D9D9] bg-opacity-[0.2] rounded-full"></div>
                {/* Top dot */}
                <div className="absolute top-[13px] left-[133px] w-[26px] h-[25px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] rounded-full"></div>
                {/* Bottom dot */}
                <div className="absolute bottom-[26px] left-[325px] w-[26px] h-[26px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] rounded-full"></div>
            </div>

            {/* Left side circle background */}
            <div className="absolute top-[200px] -left-[200px] w-[522px] h-[522px] border border-[#BEA036] border-opacity-10 rounded-full hidden xl:block pointer-events-none">
                {/* Top dot */}
                <div className="absolute top-[13px] left-[133px] w-[26px] h-[25px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] rounded-full"></div>
                {/* Bottom dot */}
                <div className="absolute bottom-[26px] left-[325px] w-[26px] h-[26px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] rounded-full"></div>
            </div>

            {/* Outer dotted/dashed circle (visual recreation of concentric lines in image) */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px] border border-gray-100 rounded-full pointer-events-none -z-10"></div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-gray-50 rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Title */}
                <h2 className="text-[48px] md:text-[60px] font-bold text-center mb-4 leading-none bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent uppercase">
                    HOW WE WORK ?
                </h2>

                {/* Subtitle */}
                <p className="text-[20px] md:text-[22px] font-medium text-center text-black mb-20 max-w-[937px] leading-[170%]">
                    Let us give you some hints about how we work in e-RAMO with any client.
                </p>

                {/* Cards Container */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[40px] mb-20">
                    {/* Planning Card */}
                    <div className="relative group">
                        <div className="relative w-[380px] h-[320px] lg:w-[413px] lg:h-[348px] rounded-[6px] shadow-[7px_7px_6px_rgba(0,0,0,0.25)] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                            <Image
                                src="/assets/Rectangle 97.jpg"
                                alt="Planning"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[214px] h-[72px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] rounded-[6px] shadow-[6px_1px_7px_rgba(0,0,0,0.25)] flex items-center justify-center z-20">
                            <span className="text-white text-[22px] font-medium">Planning</span>
                        </div>
                    </div>

                    {/* Design Card */}
                    <div className="relative group lg:mt-10">
                        <div className="relative w-[340px] h-[280px] lg:w-[379px] lg:h-[320px] rounded-[6px] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] shadow-[0px_4px_10px_rgba(0,0,0,0.1)]">
                            <Image
                                src="/assets/Rectangle 98.jpg"
                                alt="Design"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[194px] h-[66px] bg-[#D9D9D9] rounded-[6px] flex items-center justify-center z-20">
                            <span className="text-[#474646] text-[22px] font-medium">Design</span>
                        </div>
                    </div>

                    {/* Development Card */}
                    <div className="relative group lg:mt-10">
                        <div className="relative w-[340px] h-[280px] lg:w-[379px] lg:h-[320px] rounded-[6px] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] shadow-[0px_4px_10px_rgba(0,0,0,0.1)]">
                            <Image
                                src="/assets/Rectangle 99.jpg"
                                alt="Development"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[194px] h-[66px] bg-[#D9D9D9] rounded-[6px] flex items-center justify-center z-20">
                            <span className="text-[#474646] text-[22px] font-medium">Development</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Description */}
                <p className="text-[18px] md:text-[22px] font-medium text-center text-black max-w-[726px] leading-[170%]">
                    We'll go over your goals, styles you like, layouts & color you like and your projects need. then start to make plans for what can fit your needs.
                </p>
            </div>
        </section>
    );
};

export default HowWeWork;
