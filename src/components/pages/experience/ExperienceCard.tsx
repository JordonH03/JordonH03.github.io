import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface IExperienceProps {
    company: string
    description: string[]
    end: string
    position: string
    start: string
    tools: string[]
}

export default function ExperienceCard({
    company,
    description,
    end,
    position,
    start,
    tools,
}: IExperienceProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{company}</CardTitle>
                <CardDescription>{position}</CardDescription>
                <span className="text-sm font-light text-muted-foreground">
                    {start} - {end}
                </span>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside">
                    {
                        description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))
                    }
                </ul>
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