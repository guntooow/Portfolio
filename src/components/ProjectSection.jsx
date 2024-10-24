// Imports aqui!!
import ProjectElement from "./ProjectElement"

function ProjectSection() {
    return (
        <section className="gap-8 flex flex-col items-center p-32">
            <h1 className="font-grotesk font-bold text-8xl text-purple-600">Projetos</h1>
            <div className="flex gap-6">
                <ProjectElement bgImgSrc='src/assets/image.jpg' hText='Projeto1' des='ABC' />
                <ProjectElement bgImgSrc='src/assets/image.jpg' hText='Projeto1' des='ABC' />
                <ProjectElement bgImgSrc='src/assets/image.jpg' hText='Projeto1' des='ABC' />
                <ProjectElement bgImgSrc='src/assets/image.jpg' hText='Projeto1' des='ABC' />
                <ProjectElement bgImgSrc='src/assets/image.jpg' hText='Projeto1' des='ABC' />
                <ProjectElement bgImgSrc='src/assets/image.jpg' hText='Projeto1' des='ABC' />
            </div>
        </section>
    )
}

export default ProjectSection