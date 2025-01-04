import text from "@/data/text.json"
import Header from "../ui/Header"

export default function About() {
    return (
        <section id="about" className="grid grid-cols-1 gap-y-4">
            <div>
                <Header title={text.about.title} />
                {
                    text.about.description.map((paragraph: string, index: number) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                    ))
                }
            </div>
            <img className="hidden rounded-lg max-w-xs lg:max-w-lg mx-auto md:block" src={text.about.image} alt="profile photo" />
        </section>
    )
}
