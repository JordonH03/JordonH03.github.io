import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Container, Grid } from "@radix-ui/themes"
import Hero from "@/components/Hero"
import About from "@/components/About"

export default function Home() {
    return (
        <Grid
            align="center"
            className="h-screen p-8"
            columns="1"
            justify="center"
            px="96px"
            rows="auto 1fr auto"
        >
            <Navbar />
            <Container px="96px">
                <Hero />
                <About />
            </Container>
            <Footer />
        </Grid>
    )
}
