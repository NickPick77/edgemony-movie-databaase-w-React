import styles from "./styles.module.scss";

export function Modal({ text, isVisibile }) {
    return (
        <>
            {isVisibile && (
                <div className={styles.Modal}>
                    <p className={styles.Modal__paragraph}>{text}</p>
                </div>
            )}
        </>
    );
}
