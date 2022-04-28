import { useState } from "react"
import styles from "./styles.module.scss"

export function SearchBar({ searchResult }) {
    const [searchInput, setSearchInput] = useState("Es: Catania")
    const [searchSend, setSearchSend] = useState("GO")



    const userInput = (event) => {


        setSearchInput(event.target.value)

    }




    return (
        <section className={styles.search_container}>
            <label htmlFor={styles.search_bar}>Cerca una città</label>
            <input type="text" id="search-bar" value={searchInput} onChange={userInput} />
            <input type="submit" id="submit" value={searchSend} onClick={searchInput} ></input>

        </section>
    )
}