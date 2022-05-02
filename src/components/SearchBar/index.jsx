import styles from "./styles.module.scss"

export function SearchBar({ searchResult, searchInput }) {


    return (
        <section className={styles.search_container}>
            <label htmlFor={styles.search_bar}>Cerca una città</label>
            <input
                type="text"
                id="search-bar"
                value={searchInput}
                onChange={(e) => searchResult(e.target.value)}
            />
        </section>
    )
}