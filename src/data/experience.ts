
export interface IExperience {
    tabLabel?: string
    position: string
    company: string
    link: string
    start: string
    end: string
    description: string[] | string
    tools?: string[]
}

export const experience: IExperience[] = [
    {
        tabLabel: "Payworks",
        position: "Software Developer",
        company: "Payworks",
        link: "https://www.payworks.com/",
        start: "Aug 2025",
        end: "Present",
        description: "IP bio coming soon!",
    },
    {
        tabLabel: "RBC Series II",
        position: "Developer Co-op",
        company: "RBC",
        link: "https://www.avionrewards.com/index.html",
        start: "May",
        end: "Aug 2025",
        description: [
            "Refactored Spring Boot microservices from legacy authentication platform to 3rd-party vendor, improving security and maintaining backwards-compatibility for Avion Loyalty's backend systems",
            "Wrote SQL to handle efficient large-scale data transfers, while ensuring data integrity and consistency for millions of Avion Loyalty members"
        ],
        tools: ["Java", "Spring Boot"]
    },
    {
        tabLabel: "RBC Series I",
        position: "Developer Co-op",
        company: "RBC",
        link: "https://www.avionrewards.com/index.html",
        start: "Sep",
        end: "Dec 2024",
        description: [
            "Collaborated with product owners, designers, and quality engineers to fix accessibility defects in the Avion Linked Loyalty flagship app",
            "Taught senior developers the configuration process for DAST scanning in our CI/CD pipeline to detect vulnerabilities and uphold RBC's security guidelines",
            "Developed a plugin and catalog page with React and Backstage to introduce a new catalog taxonomy for the internal developer portal"
        ],
        tools: ["Java", "Angular", "TypeScript", "React", "Backstage"]
    },
    {
        tabLabel: "Priceline",
        position: "Software Developer Co-op",
        company: "Priceline",
        link: "https://www.priceline.com/",
        start: "Jan",
        end: "Apr 2024",
        description: [
            "Developed a web application using Typescript and Contentful, enabling marketers and product managers to enhance and customize promotions for hundreds of hotel properties",
            "Implemented upgrades to our design system search components, improving mobile usability and maintaining a consistent visual identity across platforms",
            "Built a REST API endpoints for in TypeScript and SQL, allowing easy retrieval of partner data in our internal console tool"
        ],
        tools: [
            "React",
            "TypeScript",
            "Jest",
            "Storybook",
            "Contentful CMS"
        ]
    },
    {
        tabLabel: "CUSEC",
        position: "Co-Chair",
        company: "Canadian University Software Engineering Conference (CUSEC)",
        link: "https://2024.cusec.net",
        start: "Jan 2023",
        end: "Jan 2024",
        description: [
            "Oversaw operations for a team of 20 students to smoothly execute a 3-day conference for over 250 attendees and 17 universities across Canada",
            "Swiftly resolved critical challenges including team restructuring and on-site coordination of sponsors and speakers, ensuring a seamless event experience and safe environment for all participants",
            "Handled recruitment and interviewing of 40+ candidates to build a well-rounded team with strong interpersonal, organizational and communication skills"
        ]
    }
]