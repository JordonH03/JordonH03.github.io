import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons"

interface IProjectProps {
    demo: string
    description: string
    github: string
    name: string
    tools: string[]
}

export default function ProjectCard({
    demo,
    description,
    github,
    name,
    tools,
}: IProjectProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row flex-nowrap justify-between items-baseline">
                <CardTitle>{name}</CardTitle>
                <span className="flex gap-2">
                    <a href={demo}><GlobeIcon/></a>
                    <a href={github}><GitHubLogoIcon/></a>
                </span>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
                {
                    tools.map((tool, index) => (
                        <Badge key={index}>{tool}</Badge>
                    ))
                }
            </CardFooter>
        </Card>
    )
}
