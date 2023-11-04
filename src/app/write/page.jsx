"use client"

import { useEffect, useState } from "react"
import styles from "./writePage.module.css"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"
import { AiOutlinePlus, AiOutlineUpload, AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { BsCardImage } from 'react-icons/bs'
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase"

const storage = getStorage(app);

const WritePage = () => {

    const { status } = useSession();

    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");

    useEffect(() => {
        const upload = () => {

            const name = new Date().getTime + file.name;

            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL)
                    });
                }
            );
        };

        file && upload();
    }, [file])

    if (status === "loading") {
        return <div className={styles.loading}></div>
    }

    if (status === "unauthenticated") {
        router.push("/")
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    //example Allan Mathenge = allan-mathenge

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: "travel",
            }),
        });
        return res
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Title"
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className={styles.editor}>
                <button
                    className={styles.button}
                    onClick={() => setOpen((prev) => (!prev))}
                >
                    <AiOutlinePlus className={styles.AiOutlinePlus} />
                </button>

                {open && (
                    <div className={styles.add}>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                        />

                        <button className={styles.addButton}>
                            <label htmlFor="image">
                                <BsCardImage className={styles.BsCardImage} />
                            </label>
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
            <button className={styles.publish} onClick={handleSubmit}>Publish</button>
        </div>
    )
}

export default WritePage