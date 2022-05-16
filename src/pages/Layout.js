import { Outlet, Link } from 'react-router-dom'
import layoutStyle from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <div className={layoutStyle.container}>
                <div className={layoutStyle.nav}>
                    <h1 className={layoutStyle.logo}>ToDo</h1>
                    <nav className={layoutStyle.nav_link_container}>
                        <ul className={layoutStyle.nav_link}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/todo-app'>Todo App</Link>
                            </li>
                            <li>
                                <Link to='/about-us'>About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout