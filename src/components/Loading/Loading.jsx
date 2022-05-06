import styles from "./styles.module.scss"


export default function Loading() {
    return (
        <div className={styles.cards}>
            <div className={styles.cards_loading}>
                <div className={styles.img_loading}></div>
                <div className={styles.content_loading}>
                    <h2>Loading</h2>
                    <p></p>
                </div>
            </div>
        </div>
    )
}