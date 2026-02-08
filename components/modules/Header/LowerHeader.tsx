'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ChevronDown, User } from "lucide-react";

const Navigation = () => {
    const Links = [
        { name: "Home", link: "/", highlight: true },
        { name: "About", link: "/about", hasDropdown: true },
        { name: "Services", link: "/services", hasDropdown: true },
        { name: "Projects", link: "/projects" },
        { name: "Clients", link: "/clients" },
        { name: "Blog", link: "/blog" },
        { name: "Jobs", link: "/jobs" }
    ];
    return (
        <nav className="flex items-center gap-5">
            {Links.map((link, index) => (
                <Link
                    key={index}
                    href={link.link}
                    className={`flex items-center gap-1 text-[15px] font-bold transition-colors ${link.highlight ? "text-[#8B7D3B]" : "text-[#474646] hover:text-[#BEA036]"
                        }`}
                >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
            ))}
        </nav>
    )
}

const Logo = () => {
    return (
        <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2">
            <Link href="/">
                <Image
                    src="/assets/e-ramo-logo-high-res 2.png"
                    alt="E-RAMO Logo"
                    width={180}
                    height={80}
                    className="h-16 w-auto object-contain"
                />
            </Link>
        </div>
    )
}

const RightSection = () => {
    return (
        <div className="flex items-center gap-4 text-[#474646]">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#BEA036] transition-colors">
                <span className="text-[14px] font-bold">عربية</span>
                <div className="relative w-5 h-3.5 overflow-hidden rounded-[2px] border border-gray-100">
                    <Image src="/assets/Flag_of_Egypt 1.svg" alt="EG Flag" fill className="object-cover" />
                </div>
                <ChevronDown className="w-3.5 h-3.5" />
            </div>

            <span className="text-gray-300">|</span>

            {/* Auth section */}
            <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <div className="flex items-center gap-1 text-[14px] font-bold">
                    <Link href="/login" className="hover:text-[#BEA036] transition-colors">Login</Link>
                    <span className="font-normal text-gray-400 mx-0.5">|</span>
                    <Link href="/registration" className="hover:text-[#BEA036] transition-colors">Register</Link>
                </div>
            </div>
        </div>
    );
}

const LowerHeader = () => {
    return (
        <div className="bg-white sticky top-0 z-50 shadow-sm font-['Lato'] border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative">
                <Navigation />
                <Logo />
                <RightSection />
            </div>
        </div>
    )
}

export default LowerHeader
