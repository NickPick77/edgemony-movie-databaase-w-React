import styles from "./styles.module.scss"

export function SearchBar({ searchResult, searchInput }) {


    return (
        <section className={styles.search_bar}>
            <label htmlFor="searchBar">Search by title</label>
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="Es: DeadPool"
                value={searchInput}
                onChange={(e) => searchResult(e.target.value)}
            />
        </section>
    )
}