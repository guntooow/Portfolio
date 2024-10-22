// Imports aqui!!
import Technology from "./Technology"
import JavaScriptIcon from "../assets/file-json-2.svg"
import ReactIcon from "../assets/atom.svg"
import Wind from "../assets/wind.svg"

function Skills() {
    return(
        <section className="pl-32 pr-32 p-16 h-96">
            <h2 className="text-4xl font-bold">Minhas tecnologias</h2>
            <div id='tecnologias' className="">
                <Technology name="JavaScript" img={JavaScriptIcon}/>
                <Technology name="React" img={ReactIcon}/>
                <Technology name="Tailwind" img={Wind}/>
                <Technology name="Html" img={JavaScriptIcon}/>
            </div>
        </section>
    )
}

export default Skills