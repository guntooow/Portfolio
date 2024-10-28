function Input({ img, placeholder }) {
    return (
        <div className="text-xl flex items-center gap-2 bg-gray-300 opacity-80 bg-blend-darken p-4 pr-6 rounded-md">
            {img}
            <input className="bg-transparent" placeholder={placeholder} />
        </div>
    )
}

export default Input
