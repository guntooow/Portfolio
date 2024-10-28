// Imports aqui!!

function About() {
    return (
        <div id="sobre" className="flex flex-col items-center w-screen shadow-sm shadow-gray-300 p-48">
            <section className="flex flex-col gap-2 justify-center items-center container">
                <h1 className="text-purple-600 font-bold text-8xl left-0">Sobre</h1>
                <p className="flex w-fit text-5xl font-semibold text-purple-500">Sou um desenvolvedor apaixonado, interessado em aprender sobre tecnologia desde criança. Busco soluções criativas pra problemas muitas vezes considerados
                    complexos e, acima de tudo, me divirto ao programar!
                </p>
            </section>
        </div>
    )
}

export default About;