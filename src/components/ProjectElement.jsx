import { ArrowUpRight } from "lucide-react"

function ProjectElement({bgImgSrc, hText, des}) {
    return(
          <div className={`bg-[url(${bgImgSrc})] bg-cover flex flex-col font-grotesk items-center`}>
            <h1 className="font-bold container">{hText}</h1>
            <p className="font-semibold">{des}</p>
            <span className="cursor-pointer flex rounded-md border-2 border-purple-400 text-purple-400 hover:border-purple-500 hover:bg-purple-500 hover:text-gray-200 transition-all"><a href="https://github.com" target="_blank" className="font-bold flex"> Conheça! <ArrowUpRight/></a></span>
          </div>

    )
}

export default ProjectElement