import type {BookData} from "@/utils/types/BookType";
import Link from "next/link";
import styles from "@/styles/book-item.module.css";

export default function BookItem({
                                     id,
                                     title,
                                     subTitle,
                                     description,
                                     author,
                                     publisher,
                                     coverImgUrl
                                 }
                                 : BookData) {
    return (
        <Link className={styles.container} href={`/book/${id}`}>
            <img src={coverImgUrl} alt="img" />
            <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.subTitle}>{subTitle}</div>
                <br/>
                <div className={styles.author}>
                    {author} | {publisher}
                </div>
            </div>
        </Link>
    );
};