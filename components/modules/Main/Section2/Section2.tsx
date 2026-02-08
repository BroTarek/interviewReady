import React from 'react';
import Image from 'next/image';
import StatCard from './StatCard';

const Section2 = () => {
    return (
        <section className="relative w-full min-h-[1100px] bg-[#2C2610] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                {/* Assuming a pattern background here, using a placeholder or the color is dominant */}
                <Image src="/assets/Rectangle 93.jpg" alt="Background Pattern" fill className="object-cover" />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center">

                {/* Top Text */}
                <h2 className="text-white font-bold text-3xl md:text-[55px] leading-[96.5%] text-center max-w-[1531px] mx-auto mt-[100px]">
                    We deploy world-class <span className="text-[#BEA036]">Creative Design team</span> on demand
                    that can design, build, ship and scale your vision in the most efficient way
                </h2>

                {/* Creative Hand Image */}
                <div className="absolute left-[37px] top-[424px] hidden lg:block">
                    <Image
                        src="/assets/creative-hand 1.png"
                        alt="Creative Hand"
                        width={295}
                        height={307}
                    />
                </div>

                {/* Play Button Section */}
                <div className="flex items-center gap-6 mt-[100px] mb-[100px] hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="w-[104px] h-[104px] relative">
                        <Image
                            src="/assets/Group 63.svg"
                            alt="Play Button"
                            width={104}
                            height={104}
                        />
                    </div>
                    <span className="text-white text-[22px] font-medium leading-[170%]">Play Take a look behind the scenes</span>
                </div>


                {/* Bottom Text */}
                <h2 className="text-white font-bold text-3xl md:text-[60px] leading-[96.5%] text-center mt-10">
                    Looking for a Professional and Talanted Co?
                </h2>

                <p className="text-white font-medium text-lg md:text-[22px] leading-[170%] text-center max-w-[937px] mx-auto mt-6">
                    e-RAMO promise you that working with us is an experience you will touch it with yourself. We
                    are an innovative agency, We develop and design customers around the world.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 w-full max-w-[1418px]">
                    <StatCard number="4905" label="ORDERED COFFEE'S" />
                    <StatCard number="4905" label="QUESTIONS ANSWERED" />
                    <StatCard number="4905" label="COMPLETED PROJECTS" />
                    <StatCard number="4905" label="HAPPY CLIENTS" />
                </div>

                {/* Decorative Elements (Circles) */}
                <div className="absolute top-[13px] left-[133px] w-[26px] h-[25px] rounded-full bg-gradient-to-r from-[#594D1C] to-[#BEA036] opacity-50"></div>
                <div className="absolute bottom-[200px] right-[200px] w-[26px] h-[26px] rounded-full bg-gradient-to-r from-[#594D1C] to-[#BEA036] opacity-50"></div>

            </div>
        </section>
    );
};

export default Section2;
