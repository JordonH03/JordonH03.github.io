import text from "@/data/text.json"
import React from "react"

export default function About() {
    return (
        <section id="about">
            <h3 className="text-xl lg:5xl text-secondary">{text.about.title}</h3>
            <div className="grid grid-cols-[6fr_2fr] gap-x-12">
                <p className="text-primary">{text.about.description}</p>
                <div className="hidden md:block">
                    <img src={text.about.image} alt="profile photo" />
                </div>
            </div>
        </section>
    )
}