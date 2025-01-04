import text from "@/data/text.json"
import Header from "../ui/Header"

export default function About() {
    return (
        <section id="about" className="grid grid-cols-1 md:grid-cols-[6fr_2fr] gap-x-12">
            <div>
                <Header title={text.about.title} />
                {
                    text.about.description.map((paragraph: string, index: number) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                    ))
                }
            </div>
            <div className="hidden md:block">
                <img src={text.about.image} alt="profile photo" />
            </div>
        </section>
    )
}