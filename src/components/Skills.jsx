// Imports aqui!!
import Technology from "./Technology"

function Skills() {
    return (
        <div className="flex flex-col p-24 pb-48 items-center shadow-sm shadow-gray-300">
            <section className="p-16 h-96 space-y-8 flex flex-col">
                <h2 className="text-8xl font-bold text-center text-purple-600">Minhas tecnologias</h2>
                <div id='tecnologias' className="flex gap-6">
                    <Technology name="JavaScript" img={'devicon-javascript-plain'} />
                    <Technology name="Node" img={'devicon-nodejs-plain'} />
                    <Technology name="React" img={'devicon-react-original'} />
                    <Technology name="Tailwind" img={'devicon-tailwindcss-original'} />
                    <Technology name="Html" img={'devicon-html5-plain'} />
                    <Technology name="Css" img={'devicon-css3-plain'} />
                </div>
            </section>
        </div>
    )
}

export default Skills