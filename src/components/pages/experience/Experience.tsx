import text from "@/data/text.json"
import ExperienceCard from "./ExperienceCard"
import Header from "@/components/ui/Header"

export default function Experience() {
    return (
        <section id="experience" className="w-fit mx-auto">
            <Header title={text.experience.title} />
            <div className="grid grid-cols-1 gap-y-8">
                {
                    text.experience.experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))
                }
            </div>
        </section>
    )
}