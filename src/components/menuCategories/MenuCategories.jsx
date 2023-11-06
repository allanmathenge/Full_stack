import React from 'react'
import Link from 'next/link'
import styles from "./menuCategories.module.css"

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>
                Python
            </Link>
            <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
                JavaScript
            </Link>
            <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
                Node.Js
            </Link>
            <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
                MongoDB
            </Link>
            <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
                CSS
            </Link>
            <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
                Auth
            </Link>
        </div>
    )
}

export default MenuCategories