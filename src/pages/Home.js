import styles from './home.module.css'
import homeImg from '../assets/todo_home_img.png'

const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.banner_img}>
                    <img src={homeImg} alt="home" className={styles.img} />
                </div>
                <div className={styles.banner_text}>
                    <h1 className={styles.title}>Welcome to ToDo Web Application</h1>
                    <h3 className={styles.subtitle}>Enumerate you'r dialy tasks here</h3>
                </div>
            </div>
        </>
    )
}

export default Home