import { Badge } from "@/components/ui/badge"
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
        <aside className="rounded-lg lg:px-6 lg:py-4 lg:bg-slate-500/40 lg:shadow-lg max-w-4xl">
            <div className="grid grid-rows-1 grid-cols-[auto,auto] items-center justify-between mb-2">
                <h3 className="text-lg font-medium">{name}</h3>
                <span className="flex gap-2">
                    {
                        demo && <a aria-label="View live project, opens in a new tab" href={demo} target="_blank" rel="noreferrer"><GlobeIcon height={16} width={16}/></a>
                    }
                    {
                        github && <a aria-label="View Github repository, opens in a new tab" href={github} target="_blank" rel="noreferrer"><GitHubLogoIcon height={16} width={16}/></a>
                    }
                </span>
            </div>
            <div className="mb-5">
                <p>{description}</p>
            </div>
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
