import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon } from "@radix-ui/react-icons"

interface IExperienceProps {
    company: string
    description: string[]
    end: string
    link: string | null
    position: string
    start: string
    tools: string[]
}

export default function ExperienceCard({
    company,
    description,
    end,
    link,
    position,
    start,
    tools,
}: IExperienceProps) {
    const srLabel = `${company}, opens in a new tab`

    return (
        <aside className="rounded-lg md:border">
            <div className="mb-3">
                <div>
                    <p className="text-sm font-light mb-1">
                        {start} - {end}
                    </p>
                    <h3 className="text-lg font-medium hover:text-blue-500">
                        {
                            link ? (
                                <span>
                                    <a
                                        aria-label={srLabel}
                                        className="mr-1 hover:underline"
                                        href={link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {company}
                                    </a>
                                    <ExternalLinkIcon className="inline-block" height={16} width={16} />
                                </span>
                            ) : (
                                <span>{company}</span>
                            )
                        }
                    </h3>

                </div>
                <p className="text-base">{position}</p>
            </div>
            <ul className="list-disc list-inside mb-5">
                {
                    description.map((point, index) => (
                        <li className="mb-2" key={index}>{point}</li>
                    ))
                }
            </ul>
            <div className="flex flex-wrap gap-2">
                {
                    tools.map((tool, index) => (
                        <Badge key={index}>{tool}</Badge>
                    ))
                }
            </div>
        </aside>
    )
}