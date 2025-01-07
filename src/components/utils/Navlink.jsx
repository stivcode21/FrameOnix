const NavLink = ({ href, title }) => {  // pasamos 2 parametros para href y el titulo
    return (
        <a href={href}>
            {title}
        </a >
    )
}

export default NavLink
