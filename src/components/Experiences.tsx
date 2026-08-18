import { experience, type IExperience } from '../data/experience'
import ExperienceItem from './ExperienceItem'


export default function Experiences() {
    return (
        <section id="experience">
            <h2 className="section-header">Experience</h2>
            <ol className="experience-section-body">
                {experience.map((exp: IExperience) => (
                    <ExperienceItem {...exp} key={exp.tabLabel} />
                ))}
            </ol>
        </section>
    )
}
