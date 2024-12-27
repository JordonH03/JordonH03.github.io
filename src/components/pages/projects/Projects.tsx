import text from "@/data/text.json"
import ProjectCard from "./ProjectCard"


export default function Projects() {
    return (
        <section id="projects">
            <h3 className="text-xl lg:5xl text-secondary">{text.projects.title}</h3>
            <div>
                {
                    text.projects.projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </section>
    )
}
