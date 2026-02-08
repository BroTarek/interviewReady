import React from 'react';
import Image from 'next/image';

const LatestNews = () => {
    const newsItems = [
        {
            id: 1,
            category: "Development",
            date: "20/3/2023",
            title: "At Collax we specialize in designing, building",
            image: "/assets/Rectangle 105.jpg",
        },
        {
            id: 2,
            category: "Development",
            date: "20/3/2023",
            title: "At Collax we specialize in designing, building",
            image: "/assets/Rectangle 105.jpg",
        },
        {
            id: 3,
            category: "Development",
            date: "20/3/2023",
            title: "At Collax we specialize in designing, building",
            image: "/assets/Rectangle 105.jpg",
        }
    ];

    return (
        <section className="py-16 font-['Lato'] bg-white overflow-hidden">
            <div className="max-w-[1350px] mx-auto px-6">
                <h2 className="text-[48px] font-bold text-center mb-16 leading-[96.5%] bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                    Latest News
                </h2>

                <div className="flex flex-col lg:flex-row items-stretch">
                    {/* Left Side: Main News Card */}
                    <div className="w-full lg:w-[580px] flex flex-col">
                        {/* Rectangle 103 */}
                        <div className="relative w-full h-[300px] bg-[#D9D9D9] rounded-[6px] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] overflow-hidden mb-6">
                            <Image
                                src="/assets/Rectangle 103.jpg"
                                alt="Main News"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Development & Date */}
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[18px] font-medium leading-[170%] bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                                Development
                            </span>
                            <span className="text-[20px] font-medium leading-[170%] text-[#8A8A8A]">
                                20/3/2023
                            </span>
                        </div>

                        {/* Title: User folw solution */}
                        <h3 className="text-[48px] font-bold leading-[96.5%] mb-4 bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                            User folw solution
                        </h3>

                        {/* Description */}
                        <p className="text-[18px] font-medium leading-[170%] text-justify text-black max-w-[580px]">
                            At Collax we specialize in designing, building, shipping and scaling beautifu. At Collax we specialize in designing, building, shipping and scaling beautif
                        </p>
                    </div>

                    {/* Gap + Separator + Gap */}
                    <div className="hidden lg:flex w-[80px] justify-center">
                        <div className="w-[1px] h-[480px] bg-black opacity-100 mt-0"></div>
                    </div>

                    {/* Right Side News List */}
                    <div className="flex-1 flex flex-col gap-[10px]">
                        {newsItems.map((item, index) => (
                            <div key={index} className="flex flex-col xl:flex-row gap-[16px] items-start lg:items-center min-h-[174px] mb-[10px]">
                                {/* Thumbnail Image */}
                                <div className="relative w-[240px] h-[174px] bg-[#D9D9D9] rounded-[6px] shrink-0 overflow-hidden">
                                    <Image
                                        src="/assets/Rectangle 105.jpg"
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 h-full justify-start pt-2">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[18px] font-medium leading-[170%] bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                                            Development
                                        </span>
                                        <span className="text-[20px] font-medium leading-[170%] text-[#8A8A8A]">
                                            20/3/2023
                                        </span>
                                    </div>
                                    <h4 className="text-[32px] font-medium leading-[110%] bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent max-w-[480px]">
                                        At Collax we specialize in designing, building
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
