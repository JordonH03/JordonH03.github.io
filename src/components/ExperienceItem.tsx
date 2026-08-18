import { ExternalLinkIcon } from '@radix-ui/react-icons'
import type { IExperience } from '../data/experience'
import '../styles/experiences.scss'

export default function ExperienceItem({ company, description, end, link, position, start, tools }: IExperience) {

    return (
        <li className="experience">
            <span className="experience-date">
                {start} &ndash; {end}
            </span>
            <div className='experience-body'>
                <div className="experience-header">
                    {
                        link ? (
                            <a aria-label={`${position} at ${company}. Opens in a new tab.`} href={link} target="_blank" rel="noopener noreferrer">
                                <span>{position} @ {company} <ExternalLinkIcon height={16} width={16}/></span>
                            </a>
                        ) : (
                            <span>{position} @ {company}</span>
                        )
                    }
                </div>
                <div className="experience-description">
                    {
                        typeof(description) === 'string' ? (
                            <p>{description}</p>
                        ) : (
                            <ul>
                                {
                                    description.map((bullet, index) => (
                                        <li key={index}>{bullet}</li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </div>
        </li>
    )

}