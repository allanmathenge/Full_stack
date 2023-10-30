"use client"

import { useState } from "react"
import styles from "./writePage.module.css"
import Image from "next/image"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"
import { AiOutlinePlus, AiOutlineUpload, AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { BsCardImage } from 'react-icons/bs'

const WritePage = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} />
            <div className={styles.editor}>
                <button
                    className={styles.button}
                    onClick={() => setOpen((prev) => (!prev))}
                >
                    <AiOutlinePlus className={styles.AiOutlinePlus} />

                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <BsCardImage className={styles.BsCardImage} />
                        </button>
                        <button className={styles.addButton}>
                            <AiOutlineUpload className={styles.AiOutlineUpload} />
                        </button>
                        <button className={styles.addButton}>
                            <AiOutlineVideoCameraAdd className={styles.AiOutlineVideoCameraAdd} />
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Write your idea..."
                />
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    )
}

export default WritePage