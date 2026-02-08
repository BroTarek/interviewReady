import React from 'react';
import Image from 'next/image';

const WhatWeDo = () => {
    return (
        <section className="relative py-32 bg-white overflow-hidden font-['Lato'] min-h-[1200px]">
            {/* Background Decor - Circular Patterns */}
            <div className="absolute top-[10%] left-[-10%] w-[1000px] h-[1000px] border border-[#BEA036] border-opacity-[0.05] rounded-full pointer-events-none -z-0">
                {/* Gradient Dots on the circle */}
                <div className="absolute top-[5%] left-[20%] w-[26px] h-[26px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] rounded-full"></div>
                <div className="absolute bottom-[15%] right-[25%] w-[26px] h-[26px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24 gap-x-12 items-start">

                    {/* Top Row: Title & Card 1 */}
                    <div className="flex flex-col justify-center lg:pt-20">
                        <h2 className="text-[80px] md:text-[120px] lg:text-[150px] font-bold leading-[96.5%] mb-4 bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent max-w-[600px]">
                            What We Do?
                        </h2>
                    </div>

                    <div className="flex justify-end lg:pr-12">
                        {/* Card 1: We have tricks */}
                        <div className="w-full max-w-[511px] h-auto min-h-[451px] bg-[#F8F8F8] rounded-[20px] shadow-[7px_11px_17px_11px_rgba(0,0,0,0.1)] p-10 flex flex-col relative transition-transform hover:scale-[1.02]">
                            <div className="relative w-[107px] h-[99px] mb-6">
                                <Image src="/assets/service-1 1.svg" alt="Service 1" fill className="object-contain" />
                            </div>
                            <h3 className="text-[25px] font-bold leading-[96.5%] mb-8 bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                                We have tricks
                            </h3>
                            <p className="text-[22px] font-medium leading-[170%] text-[#6F6D71] text-justify">
                                We Improve your online view, We in e-RAMO monitor keyword rankings daily, as every single day search engines index new pages with new keywords so we have to strategise and forecast your digital marketing efforts.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row: Card 2 & Card 3 */}
                    <div className="flex justify-start lg:pl-20">
                        {/* Card 2: We are award winner */}
                        <div className="w-full max-w-[511px] h-auto min-h-[451px] bg-[#F8F8F8] rounded-[20px] shadow-[7px_11px_17px_11px_rgba(0,0,0,0.1)] p-10 flex flex-col relative transition-transform hover:scale-[1.02]">
                            <div className="relative w-[104px] h-[88px] mb-8">
                                <Image src="/assets/service-2 1.svg" alt="Service 2" fill className="object-contain" />
                            </div>
                            <h3 className="text-[25px] font-bold leading-[96.5%] mb-8 bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                                We are award winner
                            </h3>
                            <p className="text-[22px] font-medium leading-[170%] text-[#6F6D71] text-justify">
                                We are a certifed Google Ads Partner in 2013 & 2014, We are specialized in PPC advertising with conversion tracking so that we can achieve the maximum return on investment (ROI) from your advertising budget.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start items-start">
                        {/* Card 3: We Brand You (Larger Card) */}
                        <div className="w-full max-w-[666px] h-auto min-h-[540px] bg-white rounded-[20px] shadow-[7px_11px_17px_11px_rgba(0,0,0,0.15)] p-12 flex flex-col relative transition-transform hover:scale-[1.02] border border-gray-50">
                            <div className="relative w-[115px] h-[105px] mb-10">
                                <Image src="/assets/service-3 1.svg" alt="Service 3" fill className="object-contain" />
                            </div>
                            <h3 className="text-[40px] font-bold leading-[96.5%] mb-10 bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                                We Brand You
                            </h3>
                            <p className="text-[30px] font-medium leading-[170%] text-[#6F6D71] text-justify">
                                As social media continues to grow as a proven marketing strategy, the marketing industry has seen an increase in clever and effective social media campaigns. to get the achieving success.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Decor - Squiggly Lines */}
            <div className="absolute bottom-0 left-0 w-[200px] h-[100px] opacity-20 transform -scale-y-100">
                <Image src="/assets/zig-zag.png" alt="Zig Zag" layout="fill" className="object-contain" />
            </div>
            <div className="absolute top-0 right-0 w-[200px] h-[100px] opacity-20">
                <Image src="/assets/zig-zag.png" alt="Zig Zag" layout="fill" className="object-contain" />
            </div>
        </section>
    );
};

export default WhatWeDo;
