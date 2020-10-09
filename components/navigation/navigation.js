import NavLink from "./navlink";
import ContactSection from "../contact";

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
        // title: 'Carrito',
        icon: 'shopping-cart'
    },

]

const Navigation = ({children}) => {
    return (
        <div>
            <div style={{ boxShadow: '0 0 5px 0 #d3d3d3', padding: 5, display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
                    <ul style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', listStyleType: 'none'}}>
                        <li key="logo" style={{ height: 50,  }}>
                            <a href="/">
                                <img src='/logo.svg' alt='logo' height="30"/>
                            </a>
                        </li>

                    {links.map(link => {
                        return (
                            <li style={{ height: 50, justifyContent: 'center'}} key={link.href} href={`/${link.href}`}>
                                {link.title}
                            </li>)
                    })}
                    </ul>
            </div>
            {children}
            <ContactSection />
        <style jsx>{`
            .title {
              margin: 0;
              width: 100%;
              padding-top: 80px;
              line-height: 1.15;
              font-size: 48px;
            }
            .rs-nav > ul {
            width: 100vw;
            justify-content: space-between;
            display: flex;    
            }`}
        </style>
        </div>
    );
}
export default Navigation
