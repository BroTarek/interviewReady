import React from 'react'
import Image from 'next/image'

const AboutCards = () => {
    const cards = [
        {
            icon: "/assets/Frame 427321083.svg",
            title: "Our company",
            description: "We provide for all clients a full integrated services to achieve the best product marketing.",
            iconWidth: 97,
            iconHeight: 97,
            iconTop: 12,
            rectTop: 48,
            titleTop: 106,
            descTop: 143
        },
        {
            icon: "/assets/Frame 427321084.svg",
            title: "Our Mission",
            description: "To serve all kinds of business from small to international companies.",
            iconWidth: 152,
            iconHeight: 152,
            iconTop: -46,
            rectTop: 48,
            titleTop: 106,
            descTop: 143
        },
        {
            icon: "/assets/Frame 132.svg",
            title: "Our company",
            description: "We provide for all clients a full integrated services to achieve the best product marketing.",
            iconWidth: 89,
            iconHeight: 72,
            iconTop: 0,
            rectTop: 36,
            titleTop: 94,
            descTop: 131
        }
    ]

    return (
        <div className="flex flex-wrap justify-center gap-16 md:gap-20 lg:gap-24 pt-32 pb-10">
            {cards.map((card, index) => (
                <div key={index} className="relative w-[216px] h-[232px] flex flex-col items-center">
                    {/* Background Rectangle */}
                    <div
                        className="absolute w-[216px] h-[164px] bg-[#EBEBEB] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-sm"
                        style={{ top: `${card.rectTop}px` }}
                    ></div>

                    {/* Icon */}
                    <div
                        className="absolute z-10 flex justify-center w-full"
                        style={{ top: `${card.iconTop}px` }}
                    >
                        <Image
                            src={card.icon}
                            alt={card.title}
                            width={card.iconWidth}
                            height={card.iconHeight}
                            className="object-contain"
                        />
                    </div>

                    {/* Title */}
                    <h3
                        className="absolute z-10 w-full text-center text-[22px] font-bold leading-[170%] bg-gradient-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent px-4"
                        style={{ top: `${card.titleTop}px` }}
                    >
                        {card.title}
                    </h3>

                    {/* Description */}
                    <p
                        className="absolute z-10 w-full text-center text-[12px] font-medium leading-[170%] text-black px-6"
                        style={{ top: `${card.descTop}px` }}
                    >
                        {card.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default AboutCards
