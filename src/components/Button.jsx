function Button({ content }) {
    return (
        <div className="text-2xl flex font-semibold bg-transparent backdrop-blur-xl border-2 p-3 rounded-md gap-1 text-purple-400 border-purple-400 hover:bg-purple-600 hover:border-purple-600 hover:text-gray-200 transition-all">
            <button className="flex justify-center items-center">{content}</button>
        </div>
    )
}

export default Button