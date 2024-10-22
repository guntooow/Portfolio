function Technology({img, name}) {
    return(
        <div className="flex-col">
            <img src={img}/>
            <p>{name}</p>
        </div>
    )
}

export default Technology