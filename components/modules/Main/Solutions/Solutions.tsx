import React from 'react';
import Image from 'next/image';

const Solutions = () => {
    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">
            {/* Background Pattern - using Rectangle 93 as fallback for repetition1.png */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image src="/assets/Rectangle 93.jpg" alt="Background Pattern" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#F8F8F8] to-transparent"></div>
            </div>

            {/* Decorative Waves */}
            <div className="absolute left-0 top-10 w-[92px] h-[36px] hidden md:block">
                <Image src="/assets/6029761 3.svg" alt="Decorative Wave" width={92} height={36} />
            </div>
            <div className="absolute right-0 top-10 w-[92px] h-[36px] hidden md:block rotate-180 transform scale-x-[-1]">
                <Image src="/assets/6029761 3.svg" alt="Decorative Wave" width={92} height={36} />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-[50px] font-bold text-center uppercase mb-12 bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent leading-[96.5%]">
                    We’ve built solutions for...
                </h2>

                {/* Logos Row */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 mb-16">
                    {/* Using available assets: 01, 02 (1), 04, 05, 06, 08. Missing 03, 07 */}
                    <div className="w-[129px] h-[58px] relative grayscale hover:grayscale-0 transition-all duration-300">
                        <Image src="/assets/02 (1).png" alt="Client Logo" fill className="object-contain" />
                    </div>
                    <div className="w-[129px] h-[58px] relative grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-md">
                        <Image src="/assets/01.png" alt="Client Logo" fill className="object-contain" />
                    </div>
                    <div className="w-[129px] h-[58px] relative grayscale hover:grayscale-0 transition-all duration-300">
                        <Image src="/assets/08.png" alt="Client Logo" fill className="object-contain" />
                    </div>
                    <div className="w-[129px] h-[58px] relative grayscale hover:grayscale-0 transition-all duration-300">
                        <Image src="/assets/04.png" alt="Client Logo" fill className="object-contain" />
                    </div>
                    <div className="w-[129px] h-[58px] relative grayscale hover:grayscale-0 transition-all duration-300">
                        <Image src="/assets/06.png" alt="Client Logo" fill className="object-contain" />
                    </div>
                    <div className="w-[129px] h-[58px] relative grayscale hover:grayscale-0 transition-all duration-300">
                        <Image src="/assets/05.png" alt="Client Logo" fill className="object-contain" />
                    </div>
                    {/* Placeholder for 07 */}
                    <div className="w-[129px] h-[58px] relative grayscale hover:grayscale-0 transition-all duration-300">
                        <Image src="/assets/01.png" alt="Client Logo Placeholder" fill className="object-contain" />
                    </div>
                </div>

                {/* CTA Button */}
                <button className="relative w-full max-w-[432px] h-[69px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] rounded-md shadow-lg flex items-center justify-center group overflow-hidden transition-all hover:scale-105">
                    <span className="text-white text-[22px] font-medium leading-[170%] z-10">CHECK OUR COMPANY PROFILE</span>
                </button>
            </div>

        </section>
    );
};

export default Solutions;
