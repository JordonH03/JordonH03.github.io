import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@radix-ui/themes/styles.css"

const inter = Inter({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-inter",
})

export const metadata: Metadata = {
    title: "Jordon Hong",
    description: "My personal website",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className={inter.variable} lang="en">
            <body>{children}</body>
        </html>
    )
}
