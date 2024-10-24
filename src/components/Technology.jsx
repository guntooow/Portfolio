function Technology({ img, name }) {
    return (
        <div className="font-grotesk font-bold flex flex-col p-8 rounded-2xl border-[0.3rem] border-purple-400 h-52 w-52 text-center justify-center text-purple-400 hover:text-purple-600 hover:border-purple-600 hover:scale-105 transition-all">
            <i className={`${img} text-8xl`}></i>
            <p className="text-2xl">{name}</p>
        </div>
    )
}

export default Technology

