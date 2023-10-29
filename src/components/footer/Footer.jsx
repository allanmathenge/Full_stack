import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt='Allan blog' width={50} height={50} />
                    <h1 className={styles.logo}>AllanBlogs</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptatibus hic voluptate amet vero, exercitationem distinctio pariatur vitae impedit minus, eligendi veritatis nihil? Accusamus eveniet animi adipisci similique molestiae laudantium?
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">HomePage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">FaceBook</Link>
                    <Link href="/">Twitter</Link>
                    <Link href="/">LinkedIn</Link>
                    <Link href="/">WhatsApp</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer