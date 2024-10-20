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
} from "../ui/navigation-menu"

export default function Navbar(): React.ReactElement {
    return (
        <NavigationMenu className="flex-auto max-w-full justify-end md:justify-between w-full">
            <NavigationMenuList className="flex-row flex-auto flex-nowrap gap-x-4 hidden md:block text-primary w-fit">
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="text-black text-2xl hover:text-accent hover:decoration-underline hover:cursor-pointer"
                        href="#home"
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
                    >
                        <GitHubLogoIcon className="h-button w-button" />
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="hover:text-accent"
                        href="mailto:jordonhong03@gmail.com"
                    >
                        <EnvelopeClosedIcon className="h-button w-button" />
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="hover:text-accent"
                        href="https://www.linkedin.com/in/jordonhong/"
                    >
                        <LinkedInLogoIcon className="h-button w-button" />
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
