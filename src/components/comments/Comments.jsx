import styles from "./comments.module.css"
import Link from "next/link";
import { getCurrentDate } from "../dates/Dates";
import Image from "next/image";

const Comments = () => {

    const today = getCurrentDate()

    const status = "authenticated";

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated"
                ? (
                    <div className={styles.write}>
                        <textarea name="" id="" cols="30" rows="2" placeholder="Leave a comment..." className={styles.input} />
                        <button className={styles.button}>Comment</button>
                    </div>
                )
                : (<Link href="/login">Login to comment</Link>)
            }
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles}>
                            <span className={styles.username}>Allan Mathenge</span>
                            <span className={styles.userInfo}>{today}</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae dignissimos dolore aliquam cumque mollitia inventore</p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles}>
                            <span className={styles.username}>Allan Mathenge</span>
                            <span className={styles.userInfo}>{today}</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae dignissimos dolore aliquam cumque mollitia inventore</p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles}>
                            <span className={styles.username}>Allan Mathenge</span>
                            <span className={styles.userInfo}>{today}</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae dignissimos dolore aliquam cumque mollitia inventore</p>
                </div>
            </div>
        </div>
    )
}

export default Comments