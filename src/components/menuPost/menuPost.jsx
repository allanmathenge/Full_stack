import React from 'react'
import styles from "./menuPost.module.css"
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/populars", {
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error("Failed")
    }
    return res.json()
};

const MenuPost = async ({ withImage }) => {

    const data = await getData();

    return (
        <div className={styles.items}>
            {data?.map((item) => (
                <Link href="/" className={styles.item} key={item._id}>
                    {withImage && (
                        <div className={styles.imageContainer}>
                            <Image src="/p2.jpg" alt="" fill className={styles.image} />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles[item.slug]}`}>{item.title}</span>
                        <h3 className={styles.postTitle}>{item.desc}</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Allan Mathenge - </span>
                            <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPost