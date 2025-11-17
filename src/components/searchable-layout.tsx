import {ReactNode, useState, useEffect} from "react";
import {useRouter} from "next/router";
import styles from "../styles/searchable-layout.module.css"

export default function SearchableLayout({
                                             children,
                                         }: {
    children: ReactNode;
}) {

    const router = useRouter();
    const [search, setSearch] = useState("");

    const q = router.query.q as string;

    useEffect(() => {
        setSearch(q || "");
    }, [q]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") onSubmit();
    }

    const onSubmit = () => {
        if (!search || q === search) return;
        router.push(`/search?q=${search}`);
    }

    return (
        <>
            <div className={styles.searchbar_container}>
                <input
                    className={"search-input"}
                    value={search}
                    placeholder={"검색어를 입력하세요..."}
                    onChange={onChangeSearch}
                    onKeyDown={onKeyDown}
                />
                <button onClick={onSubmit}>검색</button>
            </div>
            {children}
        </>

    );
}