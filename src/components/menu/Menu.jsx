import React from 'react'
import styles from "./menu.module.css"
import { getCurrentDate } from '../dates/Dates';
import MenuPost from '../menuPost/MenuPost';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
    const today = getCurrentDate()
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPost withImage={false} />
            <h2 className={styles.subtitle}>Discover By Topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />
            <h2 className={styles.subtitle}>Chosen By the Editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <MenuPost withImage={true} />
        </div>
    )
}

export default Menu