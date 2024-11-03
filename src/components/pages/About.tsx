import { Box, Grid, Section } from "@radix-ui/themes"
import text from "@/data/text.json"
import React from "react"

export default function About() {
    return (
        <Section className="min-h-fit" id="about">
            <h2 className="text-2xl lg:6xl text-secondary">{text.about.title}</h2>
            <Grid columns={{initial: "1", md: "6fr 2fr", lg: "8fr 4fr"}} gapX={{initial: "0", md: "64px", lg: "96px"}}>
                <p className="text-base md:text-lg text-primary">{text.about.description}</p>
                <Box className="hidden md:block">
                    <img src={text.about.image} alt="profile photo" />
                </Box>
            </Grid>
        </Section>
    )
}