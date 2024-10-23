function Technology({img, name}) {
    return(
        <div className="font-grotesk font-bold flex flex-col p-8 rounded-2xl border-[0.3rem] border-purple-500 h-52 w-52 text-center justify-center opacity-80 text-purple-400 hover:opacity-100 hover:scale-105 transition-all">
            <img className="stroke-purple scale-75" src={img}/>
            <p className="text-2xl">{name}</p>
        </div>
    )
}

export default Technology