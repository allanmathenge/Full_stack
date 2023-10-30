import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import { getCurrentDate } from '@/components/dates/Dates'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
    const today = getCurrentDate();
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Allan Mathenge</span>
                            <span className={styles.date}>{today}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p className={styles}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam rerum iste, officiis enim ad sequi quia ea, esse, animi aliquid omnis nihil neque voluptas dicta doloremque! Quasi, ducimus quisquam.
                        </p>
                        <h2>Lorem ipsum dolor sit  adipisicing sequi!</h2>
                        <p className={styles}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam rerum iste, officiis enim ad sequi quia ea, esse, animi aliquid omnis nihil neque voluptas dicta doloremque! Quasi, ducimus quisquam.
                        </p>
                        <p className={styles}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam rerum iste, officiis enim ad sequi quia ea, esse, animi aliquid omnis nihil neque voluptas dicta doloremque! Quasi, ducimus quisquam.
                        </p>
                    </div>
                    <div className={styles.comments}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage