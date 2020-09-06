import { Nav, Icon } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import NavLink from "./navlink";
import ContactSection from "./contact";

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
        <div style={{ display: 'flex',alignItems: 'center', flexDirection: 'column'}}>
            <Nav style={{boxShadow: '0 0 5px 0 #d3d3d3', padding: 5, display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
                    <Nav.Item key="logo" componentClass={NavLink} href="/" style={{ height: 50 }}>
                        <img src='/logo.svg' alt='logo' height="30"/>
                    </Nav.Item>

                {links.map(link => {
                    return (
                        <Nav.Item style={{ height: 50, justifyContent: 'center'}} key={link.href} componentClass={NavLink} href={`/${link.href}`} icon={<Icon style={{color: 'black', fontSize: 30}} icon={link.icon}/>}>
                            {link.title}
                        </Nav.Item>)
                })}
            </Nav>
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
