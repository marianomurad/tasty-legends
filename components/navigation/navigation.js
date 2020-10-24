import FooterSection from "../footer";

const links = [
    // {
    //     href: 'productos',
    //     title: 'Productos',
    //     icon: ''
    // },
    // {
    //     href: 'combos',
    //     title: 'Combos',
    //     icon: ''
    // },
    {
        href: 'carrito',
        title: 'Carrito',
        icon: 'shopping-cart'
    },

]

const Navigation = ({children}) => {
    return (
        <div className="tasty-legends">
            <div className="c-navigation">
                    <ul className="c-navigation__ul">
                        <li key="logo" className="c-navigation__li">
                            <a href="/">
                                <img src='/logo.svg' alt='logo' height="30"/>
                            </a>
                        </li>

                    {links.map(link => {
                        return (
                            <li className="c-navigation__li" key={link.href} href={`/${link.href}`}>
                                {link.title}
                            </li>)
                    })}
                    </ul>
            </div>
            {children}
            <FooterSection />
        </div>
    );
}
export default Navigation
