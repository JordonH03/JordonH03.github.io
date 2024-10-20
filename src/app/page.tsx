import React from "react"
import Navbar from "@/components/Navigation/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <div className="grid grid-rows-[1fr_auto_1fr] items-center justify-items-center min-h-screen p-8">
            <Navbar />
            <main className="flex flex-col gap-8 row-start-2 items-center h-full"></main>
            <Footer />
        </div>
    )
}
