import React from "react";
import { Search, Phone, Instagram, Facebook, Youtube, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
    return (
        <div className="flex items-center w-full max-w-[350px]">
            <input
                type="text"
                className="w-full h-8 px-4 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none rounded-l-[4px]"
            />
            <button className="h-8 w-10 bg-[#594D1C] flex items-center justify-center rounded-r-[4px] hover:bg-[#4a3f16] transition-colors">
                <Search className="w-5 h-5 text-white" />
            </button>
        </div>
    )
}

const UpperHeader = () => {
    return (
        <div className="bg-[#897728] text-white py-2 px-4 md:px-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold tracking-wider">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 border-r border-white/30 pr-4">
                        <Calendar className="w-3.5 h-3.5" />
                        <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span>CALL US : +2 - 01011559674</span>
                        <span className="mx-1 text-white/50">|</span>
                        <span>CONTACT US</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default UpperHeader