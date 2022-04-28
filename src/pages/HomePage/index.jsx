import { CardList } from "../../components/CardList";
import { SearchBar } from "../../components/SearchBar";
import styles from "./styles.module.scss";

export function HomePage() {
    return (
        <>
            <section className={styles.HomePage_section}>
                <SearchBar />
                <CardList />
            </section>
        </>
    )
}