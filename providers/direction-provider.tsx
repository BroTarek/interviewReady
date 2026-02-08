"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Direction = "ltr" | "rtl"

interface DirectionContextType {
    direction: Direction
    toggleDirection: () => void
    setDirection: (dir: Direction) => void
}

const DirectionContext = createContext<DirectionContextType | undefined>(undefined)

export function DirectionProvider({ children }: { children: React.ReactNode }) {
    const [direction, setDirectionState] = useState<Direction>("ltr")

    useEffect(() => {
        // Sync with html attribute
        document.documentElement.dir = direction
        document.documentElement.lang = direction === "rtl" ? "ar" : "en"
    }, [direction])

    const toggleDirection = () => {
        setDirectionState((prev) => (prev === "ltr" ? "rtl" : "ltr"))
    }

    const setDirection = (dir: Direction) => {
        setDirectionState(dir)
    }

    return (
        <DirectionContext.Provider value={{ direction, toggleDirection, setDirection }}>
            <div dir={direction} className="min-h-screen w-full">
                {children}
            </div>
        </DirectionContext.Provider>
    )
}

export const useDirection = () => {
    const context = useContext(DirectionContext)
    if (!context) {
        throw new Error("useDirection must be used within a DirectionProvider")
    }
    return context
}
