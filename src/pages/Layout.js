import { Outlet, Link } from 'react-router-dom'
import layoutStyle from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <div className={layoutStyle.container}>
                <h1 className={layoutStyle.logo}>ToDo</h1>
                <ul className={layoutStyle.nav_container}>
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
            </div>

            <Outlet />
        </>
    )
}

export default Layout