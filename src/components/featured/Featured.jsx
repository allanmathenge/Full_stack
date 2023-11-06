import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}> Discover top Tech articles, blogs</b> & ideas today
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p2.jpg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Top ideas</h1>
                    <p className={styles.postDesc}>Here are five concepts you can learn from The A to Z of MERN stack and Python using simple to understand examples, series of great ideas, insights and explanations to help you understand and distinguish facts from fiction</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured