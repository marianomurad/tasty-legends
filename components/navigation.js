import { Nav, Icon } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import NavLink from "./navlink";

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
    // {
    //     href: 'carrito',
    //     // title: 'Carrito',
    //     icon: 'shopping-cart'
    // },

]

const Navigation = ({children}) => {
    return (
        <div>
            <Nav style={{paddingTop: 10, paddingLeft: 10, display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <Nav.Item key="logo" componentClass={NavLink} href="/">
                        <img src='/logo.svg' alt='logo' height="20"/>
                    </Nav.Item>

                {links.map(link => {
                    return (
                        <Nav.Item key={link.href} componentClass={NavLink} href={`/${link.href}`} icon={<Icon style={{color: 'black'}} icon={link.icon}/>}>
                            {link.title}
                        </Nav.Item>)
                })}
            </Nav>
            {children}
<style jsx>{`

.title {
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
}
`}</style>
        </div>
    );
}
export default Navigation
