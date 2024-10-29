function TextArea({ img, placeholder }) {
    return (
        <div className="text-xl flex items-center gap-2 bg-gray-300 bg-opacity-70 bg-blend-darken p-4 rounded-md h-full backdrop-blur-lg">
            {img}
            <textarea className="resize-none bg-transparent outline-none h-full" placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextArea