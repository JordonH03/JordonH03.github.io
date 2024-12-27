import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface IExperienceProps {
    company: string
    description: string
    endDate: string
    position: string
    startDate: string
    tools: string[]
}

export default function ExperienceCard({
    company,
    description,
    endDate,
    position,
    startDate,
    tools,
}: IExperienceProps) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row flex-nowrap justify-between">
                    <CardTitle>{position}</CardTitle>
                    <span>
                        {startDate} - {endDate}
                    </span>
                </div>
                <CardDescription>{company}</CardDescription>
            </CardHeader>
            <CardContent>
                {description}
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