import { Link } from "react-router-dom"

import styles from "./styles.module.scss"

export default function NavBar() {
    return (
        <nav className={styles.Nav_Bar}>
            <ul>
                <li>
                    <Link to="/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/add-movie">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Add movie
                    </Link>
                </li>
            </ul>
        </nav>
    )
}