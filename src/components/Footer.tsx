import React from "react"

export default function Footer() {
    return (
        <footer className="w-full py-3 text-xs text-primary">
            <aside className="flex flex-col items-center">
                <p>Built and designed by Jordon Hong.</p>
                <p>All rights reserved. Jordon Hong © {new Date().getFullYear()}.</p>
            </aside>
        </footer>
    )
}
