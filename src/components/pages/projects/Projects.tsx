import text from "@/data/text.json"
import ProjectCard from "./ProjectCard"
import Header from "@/components/ui/Header"


export default function Projects() {
    return (
        <section id="projects">
            <Header title={text.projects.title} />
            <div className="grid grid-cols-1 gap-y-6">
                {
                    text.projects.projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </section>
    )
}
