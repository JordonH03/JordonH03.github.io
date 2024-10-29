import React from "react"
import { Box, Section } from "@radix-ui/themes"

export default function Hero() {
    return (
        <Section className="flex flex-col items-center justify-center min-h-fit md:min-h-full">
            <Box>

                <p className="text-secondary text-base md:text-xl lg:text-3xl">This is</p>
                <h1 className="text-accent text-3xl md:text-6xl lg:text-8xl">Jordon Hong.</h1>
            </Box>
        </Section>
    )
}
