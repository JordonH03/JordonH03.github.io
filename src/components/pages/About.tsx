import text from "@/data/text.json"

export default function About() {
    return (
        <section id="about" className="grid grid-cols-1 md:grid-cols-[6fr_2fr] gap-x-12">
            <div>
                <h3 className="text-xl lg:5xl text-secondary">{text.about.title}</h3>
                <p className="text-primary">{text.about.description}</p>
            </div>
            <div className="hidden md:block">
                <img src={text.about.image} alt="profile photo" />
            </div>
        </section>
    )
}