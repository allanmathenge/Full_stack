import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
import { RiTwitterXLine } from 'react-icons/ri'
import { BsLinkedin, BsFacebook, BsYoutube } from 'react-icons/bs'


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <RiTwitterXLine style={{ color: "#316FF6" }} />
                <BsLinkedin style={{ color: "#0E76A8" }} />
                <BsFacebook style={{ color: "#3b5998" }} />
                <BsYoutube style={{ color: "#CD201F" }} />
            </div>
            <div className={styles.logo}>allanBlgs</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>Homepage</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar