import text from '@/data/text.json'

export default function Hero() {
    return (
        <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-[1fr,auto,1fr]">
            <div className='col-start-1 md:col-start-2'>
                <p className="">{text.hero.intro}</p>
                <h1 className="text-4xl mb-2">{text.hero.title}</h1>
                <p className="">{text.hero.subtitle}</p>
            </div>
        </section>
    )
}
