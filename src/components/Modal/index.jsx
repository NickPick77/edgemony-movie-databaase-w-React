import styles from "./styles.module.scss";

export function Modal({ text, isVisible, colorClass, modalInput, deleter }) {

    //console.log(modalInput.yes)
    const color = (colorClass === "green") ? styles.green : (colorClass === "blue") ? styles.blue : (colorClass === "red") ? styles.red : ""
    return (
        <>
            {text ?
                isVisible && (
                    <div className={`${styles.Modal} ${colorClass ? color : ""}`}>
                        <p className={styles.Modal_paragraph}>{text}</p>
                    </div>
                ) :
                isVisible && (
                    <div className={`${styles.Modal} ${colorClass ? color : ""}`}>
                        <button onClick={deleter}>{modalInput.yes}</button>
                        <p className={styles.Modal_paragraph}>{modalInput.yes} or {modalInput.no}</p>
                    </div>
                )}
        </>
    );
}
