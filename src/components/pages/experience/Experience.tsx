import text from "@/data/text.json"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {
    return (
        <section id="experience">
            <h3 className="text-xl lg:5xl text-secondary">{text.experience.title}</h3>
            <div>
                {
                    text.experience.experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))
                }
            </div>
        </section>
    )
}