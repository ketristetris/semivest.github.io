
const Link = ((logo), {linkName}) => {

    return(
        <div className="single-link">
            <img src={logo} alt={linkName}></img>
            <div className="link-txt">{linkName}</div>
        </div>
    )
}

const Links = () => {
    return(
        <div >
            <Link/>
        </div>
    )
}

export default Links;