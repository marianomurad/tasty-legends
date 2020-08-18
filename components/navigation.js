import { Nav, Icon } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import NavLink from "./navlink";

const links = [
    {
        href: '',
        title: 'Home',
    },
    {
        href: 'productos',
        title: 'Productos',
    },
    {
        href: 'combos',
        title: 'Combos',
    },
    {
        href: 'carrito',
        title: 'Carrito',
        icon: 'shopping-cart'
    },

]

const Navigation = ({children}) => {
    return (
        <div className="hero">
            <Nav>
                {links.map(link => {
                    return (
                        <Nav.Item key={link.href} componentClass={NavLink} href={`/${link.href}`} icon={<Icon icon={link.icon}/>}>
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
