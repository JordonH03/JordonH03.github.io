import text from '@/data/text.json'

export default function Hero() {
    return (
        <section className="grid grid-rows-1 grid-cols-[1fr,auto,1fr] h-screen items-center">
            <div className='col-start-2'>
                <p className="md:text-lg">{text.hero.intro}</p>
                <h1 className="text-3xl md:text-4xl mb-2">{text.hero.title}</h1>
                <p className="md:text-lg">{text.hero.subtitle}</p>
            </div>
        </section>
    )
}
