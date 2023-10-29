import React from 'react'
import styles from "./menuPost.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { getCurrentDate } from '../dates/Dates'

const MenuPost = ({ withImage }) => {

    const today = getCurrentDate()

    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat nesciunt.</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Allan Mathenge - </span>
                        <span className={styles.date}>{today}</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat nesciunt.</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Allan Mathenge - </span>
                        <span className={styles.date}>{today}</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat nesciunt.</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Allan Mathenge - </span>
                        <span className={styles.date}>{today}</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.coding}`}>Coding</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat nesciunt.</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Allan Mathenge - </span>
                        <span className={styles.date}>{today}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPost