import { useState } from "react";
import { CardList } from "../../components/CardList";
import { SearchBar } from "../../components/SearchBar";
import styles from "./styles.module.scss";

export function HomePage() {
    const [searchInput, setSearchInput] = useState("")
    return (
        <>
            <section className={styles.HomePage_section}>
                <SearchBar searchResult={setSearchInput} searchInput={searchInput} />
                <CardList searchInput={searchInput} />
            </section>
        </>
    )
}