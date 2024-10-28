function TextArea({ img, placeholder }) {
    return (
        <div className="text-2xl flex items-center gap-2 bg-gray-300 bg-opacity-80 bg-blend-darken p-2 rounded-md h-full backdrop-blur-lg">
            {img}
            <textarea className="resize-none bg-transparent outline-none h-full" placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextArea