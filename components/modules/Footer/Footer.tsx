import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative w-full mt-24">
            {/* Top Curve Shape (Union / Vector 8) */}
            <div className="absolute top-[-100px] left-0 w-full h-[200px] z-10 pointer-events-none overflow-hidden">
                {/* Using Union.jpg or Vector 8.jpg as the shape background. 
                    Since these are images, we try to use them to create the visual curve. 
                    If they are just rectangles with a gradient, we might need a custom SVG or clip-path.
                    The design shows a wave with a central dip. I'll use a custom SVG shape to ensure it looks right if the images fail.
                */}
                <div className="absolute bottom-0 w-full drop-shadow-2xl">
                    {/* Recreating the wave with SVG since images might be hard to position perfectly without knowing their content */}
                    <svg viewBox="0 0 1440 320" className="w-full h-auto block" preserveAspectRatio="none">
                        <path fill="url(#footer-gradient)" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                        <defs>
                            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#594D1C" />
                                <stop offset="100%" stopColor="#BEA036" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Or easier: use the provided Union image if it's the full width curve */}
                <Image src="/assets/Union.jpg" alt="Footer Shape" fill className="object-cover object-top hidden" />
            </div>

            {/* Main Footer Content */}
            <div className="bg-gradient-to-r from-[#594D1C] to-[#BEA036] pt-16 pb-10 px-4 md:px-20 relative z-20 -mt-1">

                {/* Center Logo in Circle */}
                <div className="absolute -top-[80px] md:-top-[120px] left-1/2 transform -translate-x-1/2 w-[160px] h-[160px] md:w-[248px] md:h-[248px] bg-[#D9D9D9] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] z-30">
                    <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] relative bg-white rounded-full flex items-center justify-center">
                        <div className="relative w-[60%] h-[60%]">
                            <Image src="/assets/e-ramo-logo-high-res 2.png" alt="E-RAMO Logo" fill className="object-contain" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white mt-16 md:mt-24 text-center md:text-left">
                    {/* About Us */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-2xl md:text-[30px] font-bold mb-6 uppercase">ABOUT US</h3>
                        <p className="leading-[170%] text-sm md:text-[18px] font-medium opacity-90">
                            Working with us is an experience you will touch it with yourself, we are
                            specialized in Online Marketing, Web Design , Advertising & Web
                            Development.We provide for all clients a full integrated e-marketing
                            services to achieve the best product marketing, We serve all kinds of
                            business from small to international companies.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-[200px]">
                            <h3 className="text-2xl md:text-[30px] font-bold mb-6 uppercase text-center">USEFUL LINKS</h3>
                            <ul className="space-y-4 text-center">
                                <li><Link href="/" className="hover:underline opacity-90 block text-lg">• Home</Link></li>
                                <li><Link href="/about" className="hover:underline opacity-90 block text-lg">• About Us</Link></li>
                                <li><Link href="/clients" className="hover:underline opacity-90 block text-lg">• Clients</Link></li>
                                <li><Link href="/contact" className="hover:underline opacity-90 block text-lg">• Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-2xl md:text-[30px] font-bold mb-6 uppercase">FOLLOW US</h3>
                        <div className="flex gap-4 justify-center md:justify-start w-full">
                            {/* Social Icons Placeholders */}
                            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#594D1C] transition-colors">
                                <span className="font-bold">in</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#594D1C] transition-colors">
                                <span className="font-bold">f</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#594D1C] transition-colors">
                                <span className="font-bold">IG</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#594D1C] transition-colors">
                                <span className="font-bold">Bē</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#594D1C] transition-colors">
                                <span className="font-bold">Tk</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-20 pt-10 border-t border-white/10 text-sm opacity-60">
                    © 2026 E-RAMO. All rights reserved.
                </div>
            </div>

            {/* Using the Union image as a background layer if preferred */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                {/* <Image src="/assets/Union.jpg" alt="Background Shape" layout="fill" objectFit="cover" className="opacity-100" /> */}
            </div>
        </footer>
    );
};

export default Footer;
