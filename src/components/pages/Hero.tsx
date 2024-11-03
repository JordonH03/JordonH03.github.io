import React from "react"
import text from '@/data/text.json'

export default function Hero() {
    return (
        <div className="flex flex-col items-start justify-center md:items-center min-h-fit md:min-h-screen">
            <div>
                <p className="text-secondary text-lg md:text-xl">{text.hero.intro}</p>
                <h1 className="text-accent text-4xl md:text-5xl">{text.hero.title}</h1>
            </div>
        </div>
    )
}
