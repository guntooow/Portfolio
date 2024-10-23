// Imports aqui!!
import Technology from "./Technology"
import JavaScriptIcon from "../assets/file-json-2.svg"
import ReactIcon from "../assets/atom.svg"
import Wind from "../assets/wind.svg"
import Html from "../assets/file-code-2.svg"

function Skills() {
    return(
            <div className="flex flex-col items-center p-16 drop-shadow-sm">
                <section className="p-16 h-96 space-y-8 flex flex-col">
                    <h2 className="text-8xl font-bold text-center text-purple-600">Minhas tecnologias</h2>
                    <div id='tecnologias' className="flex gap-6">
                        <Technology name="JavaScript" img={JavaScriptIcon}/>
                        <Technology name="React" img={ReactIcon}/>
                        <Technology name="Tailwind" img={Wind}/>
                        <Technology name="Html" img={Html}/>
                    </div>
                </section>
            </div>
    )
}

export default Skills