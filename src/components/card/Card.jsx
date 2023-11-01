import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"
import { getCurrentDate } from "../dates/Dates"

const Card = ({ key, item }) => {

    const today = getCurrentDate()

    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{today} - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas eveniet debitis. Corrupti quis recusandae explicabo asperiores fugiat doloremque ducimus iusto, tempore maiores excepturi deserunt ipsum non, molestias reiciendis temporibus.
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card