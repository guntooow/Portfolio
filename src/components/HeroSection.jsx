import { BadgeAlert as BemVindo } from "lucide-react";
import { GithubIcon } from "lucide-react";
import { Linkedin } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { Sparkles } from "lucide-react";
import { MoonStar } from "lucide-react";

// Imports aqui !!

function HeroSection() {
    return (
        <main className="pt-8">
            <section className="font-grotesk bg-gray-200 bg-blend-darken shadow-sm shadow-gray-300 h-fit p-24 pl-32 pr-32 flex justify-between overflow-hidden gap-0 mt-10 relative">
                <MoonStar className="absolute h-96 w-96 scale-150 rotate-12 mt-14 stroke-purple-400 opacity-30 z-0" />
                <div className="flex-col space-y-3  align-middle z-10 relative p-16">
                    <h1 className="text-purple-600 text-8xl z-10 font-bold">Olá! meu nome é <br /> João.</h1>
                    <p className="text-purple-500 text-4xl z-10 flex gap-1 max-w-4xl font-semibold">Desenvolvedor Web, usando JavaScript.</p>
                    <ul className="flex gap-3">
                        <li>
                            <a title="Meu Github!" href="https://github.com/guntooow" target="blank">
                                <GithubIcon className="stroke-purple-400 h-16 w-16 transition-all hover:pb-2 hover:stroke-purple-500 hover:scale-110" />
                            </a>
                        </li>
                        <li>
                            <a href="https://br.linkedin.com/" target="blank" title="Meu linkedin!">
                                <Linkedin className="stroke-purple-400 h-16 w-16 transition-all hover:pb-2 hover:stroke-purple-500 hover:scale-110" />
                            </a>
                        </li>
                        <li>
                            <a title="Meu Whatsapp!" href="https://wa.me/5519971581846?text=Ol%C3%A1%2C%20estou%20interessado%20em%20te%20contratar%20como%20Desenvolvedor%20Web%20Front-End" target="blank">
                                <MessageCircleMore className="stroke-purple-400 h-16 w-16 transition-all hover:pb-2 hover:stroke-purple-500 hover:scale-110" />
                            </a>
                        </li>
                    </ul>
                </div>
                <BemVindo className=" stroke-purple-600 h-96 w-96 mt-8 p-0 m-0 scale-125 rotate-12" />
            </section>
        </main>
    )
}

export default HeroSection