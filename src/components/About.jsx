// Imports aqui!!
import { Sparkle } from "lucide-react";
import { Terminal } from "lucide-react";

function About() {
    return (

        <main id="sobre" className="font-grotesk pr-32 pl-32 h-96 relative w-screen shadow-sm shadow-gray-300">
            <section className="flex-col gap-2 p-8">
                <h1 className="text-purple-600 font-bold text-8xl">Sobre</h1>
                <div className="flex gap-2 relative h-fit">
                    <Sparkle className="scale-150 stroke-purple-500 pt-2 absolute fill-purple-500" />
                    <p className="flex gap-2 text-4xl max-w-4xl font-semibold text-purple-500 absolute pl-7">Sou um desenvolvedor apaixonado, interessado em aprender sobre tecnologia desde criança. Busco soluções criativas pra problemas muitas vezes considerados
                        complexos e, acima de tudo, me divirto ao programar!
                    </p>
                </div>
            </section>
        </main>

    )
}

export default About;