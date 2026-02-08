import React from 'react';

interface StatCardProps {
    number: string;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
    return (
        <div className="flex flex-col items-center w-full max-w-[317px] mx-auto">
            <div className="relative w-full h-[100px]">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#594D1C] to-[#BEA036] rounded-md shadow-lg" />

                {/* Number */}
                <div className="absolute inset-0 -top-2 flex items-center justify-center">
                    <h3 className="text-5xl md:text-[92px] font-bold text-white leading-none drop-shadow-md pb-2">
                        {number}
                    </h3>
                </div>
            </div>

            {/* Label */}
            <p className="mt-6 text-white text-lg md:text-[26px] font-bold uppercase text-center leading-tight tracking-wide">
                {label}
            </p>
        </div>
    );
};

export default StatCard;

