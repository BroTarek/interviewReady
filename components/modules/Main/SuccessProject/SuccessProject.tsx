import React from 'react';
import Image from 'next/image';

const SuccessProject = () => {
    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white font-['Lato']">
            {/* Rotated Background Block */}
            <div className="absolute top-[10%] left-[-10%] w-[120%] h-[640px] z-0 overflow-hidden pointer-events-none origin-center"
                style={{
                    transform: 'rotate(7.78deg)',
                    background: 'linear-gradient(90deg, rgba(89, 77, 28, 0.2) 0%, rgba(190, 160, 54, 0.2) 100%)'
                }}>
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'url(/assets/Rectangle 76.png)',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '400px'
                    }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* Left Side: Man Image and Decor */}
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
                        {/* Squiggly Lines Decor */}
                        <div className="absolute -top-12 left-0 md:left-12 lg:-left-20 w-[282px] h-[108px] z-20"
                            style={{ transform: 'rotate(9.47deg)' }}>
                            <Image
                                src="/assets/6029761 3.svg"
                                alt="Decor"
                                width={282}
                                height={108}
                                className="object-contain"
                            />
                        </div>

                        {/* Main Image (The Man) */}
                        <div className="relative w-full max-w-[500px] aspect-[758/747] z-10">
                            <Image
                                src="/assets/Vector 5.png"
                                alt="Successful Project"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Background Circles (From design image) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-100 rounded-full -z-10 pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-gray-50 rounded-full -z-10 pointer-events-none"></div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left max-w-[635px]">
                        <h2 className="text-[42px] md:text-[54px] font-bold leading-[96.5%] mb-8 bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                            Need a successful project?
                        </h2>

                        <p className="text-[22px] font-medium leading-[170%] text-[#6F6D71] mb-6 text-justify">
                            Truly ideal solutions for your business. We will Create your brand that you are gonna be proud of.
                        </p>

                        <p className="text-[18px] md:text-[20px] font-medium leading-[170%] text-[#6F6D71] mb-12 text-justify">
                            "A, B, C Business Now" Is to make website for your business and shoot it online, START connecting with your clients online and don't waste your time. Our websites are simple and well-structured coding, high quality and flexible layout.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-6">
                            <button className="w-[245px] h-[48px] bg-gradient-to-r from-[#594D1C] to-[#BEA036] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[6px] text-white text-[21px] font-normal leading-[170%] flex items-center justify-center transition-transform hover:scale-[1.02]">
                                CHECK OUR CLIENTS
                            </button>

                            <button className="w-[217.5px] h-[45px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[6px] flex items-center justify-center transition-transform hover:scale-[1.02] border border-transparent">
                                <span className="bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent text-[20px] font-normal leading-[170%]">
                                    ESTIMATE NOW
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessProject;
