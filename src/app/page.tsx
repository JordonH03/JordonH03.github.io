import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Grid } from "@radix-ui/themes"
import Hero from "@/components/Hero"

export default function Home() {
    return (
        <Grid
            columns="1"
            rows="auto 1fr auto"
            align="center"
            justify="center"
            className="h-screen p-8"
        >
            <Navbar />
            <Hero />
            <Footer />
        </Grid>
    )
}
