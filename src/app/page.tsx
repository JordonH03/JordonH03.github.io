import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/components/pages/Hero"
import About from "@/components/pages/About"
import Projects from "@/components/pages/projects/Projects"
import Experience from "@/components/pages/experience/Experience"

export default function Home() {
    return (
        <div
            className="grid grid-rows-[auto_1fr_auto] h-screen py-6 px-8 grid-cols-1 justify-center items-start gap-y-8"
        >
            <Navbar />
            <main className="grid gap-y-12">
                <Hero />
                <About />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </div>
    )
}
