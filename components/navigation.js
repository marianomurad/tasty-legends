import { Nav } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import NavLink from "./navlink";

const links = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '/products',
        title: 'Productos',
    },
    {
        href: '/combos',
        title: 'Combos',
    },
    {
        href: '/cart',
        title: 'Carrito',
    },

]

const Navigation = () => {
    return (
        <div className="hero">
            <Nav>
                {links.map(link => {
                    return (<Nav.Item componentClass={NavLink} href={link.href}>
                        {link.title}
                    </Nav.Item>)
                })}
            </Nav>

<style jsx>{`
.hero {
  width: 100%;
  color: #333;
  padding: 50px;
}
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
