import React from "react"

export default function Footer() {
    return (
        <footer className="py-4 text-xs text-center">
            <p>Built and designed by Jordon Hong.</p>
            <p>All rights reserved. Jordon Hong © {new Date().getFullYear()}.</p>
        </footer>
    )
}
