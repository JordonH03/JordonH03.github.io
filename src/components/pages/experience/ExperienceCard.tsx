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
        <aside className="rounded-lg lg:px-6 lg:py-4 lg:bg-slate-500/40 lg:shadow-lg max-w-4xl">
            <div className="mb-3">
                <div className="grid grid-cols-1 md:grid-cols-[auto,auto] md:grid-rows-1 md:justify-between">
                    <span className="text-sm font-light mb-1 col-start-1 md:col-start-2">
                        {start} - {end}
                    </span>
                    <h3 className="text-lg font-medium hover:text-blue-500 hover:underline col-start-1 md:row-start-1">
                        {
                            link ? (
                                <span>
                                    <a
                                        aria-label={srLabel}
                                        className="mr-1"
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