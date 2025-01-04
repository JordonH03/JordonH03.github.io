import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons"
import React from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu"

export default function Navbar(): React.ReactElement {
    return (
        <NavigationMenu className="flex-auto max-w-full justify-end md:justify-between w-full">
            <NavigationMenuList className="gap-x-4 hidden md:flex text-primary">
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="text-black text-2xl hover:text-accent hover:decoration-underline hover:cursor-pointer"
                        href="#"
                    >
                        JH
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="hover:text-accent hover:decoration-underline hover:cursor-pointer"
                        href="#about"
                    >
                        About
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="hover:text-accent hover:decoration-underline hover:cursor-pointer"
                        href="#experience"
                    >
                        Experience
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="hover:text-accent hover:decoration-underline hover:cursor-pointer"
                        href="#projects"
                    >
                        Projects
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="gap-x-6">
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="hover:text-accent"
                        href="https://github.com/JordonH03"
                        target="_blank"
                    >
                        <GitHubLogoIcon aria-label="Github, opens in a new tab" height={24} width={24}/>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="hover:text-accent"
                        href="mailto:jordonhong03@gmail.com"
                    >
                        <EnvelopeClosedIcon aria-label="Email, opens in a new window" height={24} width={24}/>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="hover:text-accent"
                        href="https://www.linkedin.com/in/jordonhong/"
                        target="_blank"
                    >
                        <LinkedInLogoIcon aria-label="LinkedIn, opens in a new tab" height={24} width={24}/>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
