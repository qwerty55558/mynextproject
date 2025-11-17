import {ReactNode} from "react";
import styles from "../styles/global-layout.module.css";
import Link from "next/link";

export default function GlobalLayout({
    children,
} : {
    children: ReactNode;
}) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href={"/"}>📚 Jang Books</Link>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                제작 @qwerty55558
            </footer>
        </div>
    );
}