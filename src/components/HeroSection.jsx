import { BadgeAlert as BemVindo } from "lucide-react"
import { GithubIcon } from "lucide-react"
import { Linkedin } from "lucide-react"
import { MessageCircleMore } from "lucide-react"

// Imports aqui !!

function HeroSection() {
    return (
        <section className="bg-gray-200 bg-blend-darken shadow-sm shadow-gray-300 h-fit p-24 pl-32 pr-32 flex justify-between overflow-hidden gap-0">
            <div className="flex-col space-y-3  align-middle">
                <h1 className="text-purple-500 text-8xl font-bold">Olá! meu nome é <br/> João.</h1>
                <p className="text-purple-400 text-4xl flex gap-1 max-w-4xl font-semibold">Desenvolvedor Web, usando JavaScript.</p>
                <ul className="flex gap-3">
                    <li>
                        <a href="https://github.com/guntooow" target="blank">
                            <GithubIcon className="stroke-purple-300 h-16 w-16 transition-all hover:stroke-purple-400 hover:scale-110"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://br.linkedin.com/" target="blank">
                            <Linkedin className="stroke-purple-300 h-16 w-16 transition-all hover:stroke-purple-400 hover:scale-110"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5519971581846?text=Ol%C3%A1%2C%20estou%20interessado%20em%20te%20contratar%20como%20Desenvolvedor%20Web%20Front-End" target="blank">
                            <MessageCircleMore className="stroke-purple-300 h-16 w-16 transition-all hover:stroke-purple-400 hover:scale-110"/>
                        </a>
                    </li>
                </ul>
            </div>
            <BemVindo className=" stroke-purple-500 h-96 w-96 p-0 m-0 scale-125 rotate-12"/>
        </section>
    )
}

export default HeroSection