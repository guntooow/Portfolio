// Imports aqui!!
import ProjectElement from "./ProjectElement"

function ProjectSection() {
    return(
          <section className="space-y-3">
                <h1 className="font-grotesk font-bold">Projetos</h1>
                <div className="flex gap-6">
                    <ProjectElement bgImgSrc='src/assets/image.jpg' hText='Projeto1' des='ABC'/>
                </div>
          </section> 
    )
}

export default ProjectSection