import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}>Hey, Allan Here!</b> Discover Technical blogs & Explore new ideas
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet?</h1>
                    <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum corrupti placeat itaque expedita atque blanditiis est cumque tenetur! Veniam molestias perspiciatis optio explicabo aspernatur sapiente ipsa, dolorum enim consequuntur tempora.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured