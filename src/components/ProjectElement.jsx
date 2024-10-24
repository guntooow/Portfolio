import { ArrowUpRight } from "lucide-react"

// bg-[url(${bgImgSrc})] bg-cover // VAI USAR DPS

function ProjectElement({ bgImgSrc, hText, des }) {
  return (
    <div className={`flex flex-col items-center h-fit w-fit border-[0.2rem] gap-1 rounded-lg border-purple-400 p-12 font-grotesk hover:scale-105 transition-all text-purple-500 hover:border-purple-600 hover:text-purple-600`}>
      <h1 className="text-4xl font-bold">{hText}</h1>
      <p className="text-2xl">{des}</p>
      <span className="cursor-pointer flex rounded-md border-2 p-2 border-purple-400 text-purple-400 hover:border-purple-600 hover:bg-purple-600 hover:text-gray-200 transition-all"><a href="https://github.com" target="_blank" className="font-semibold hover:font-bold text-md flex"> Conheça! <ArrowUpRight /></a></span>
    </div>

  )
}

export default ProjectElement