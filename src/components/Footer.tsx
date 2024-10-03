import React from "react"

export default function Footer() {
    return (
        <footer className="footer footer-center text-xs text-primary py-3">
            <aside>
                <p>Built and designed by Jordon Hong.</p>
                <p>All rights reserved. © Jordon Hong {new Date().getFullYear()}.</p>
            </aside>
        </footer>
    )
}
