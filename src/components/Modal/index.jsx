import styles from "./styles.module.scss";

export function Modal({ isVisible, setVisibility, colorClass, modalInput, deleteMovieData, deleteId }) {

    //console.log(modalInput.yes)
    const color = (colorClass === "green") ? styles.green : (colorClass === "blue") ? styles.blue : (colorClass === "red") ? styles.red : ""
    return (
        <>
            {modalInput.text.length > 0 ?
                isVisible && (
                    <div className={`${styles.Modal_Alert} ${colorClass ? color : ""}`}>
                        <p className={styles.Modal_paragraph}>{modalInput.text}</p>
                    </div>
                ) :
                isVisible && (
                    <div className={styles.Modal_Confirm}>
                        <p>Vuoi davvero eliminare il Film?</p>
                        <div className={styles.Button_Container}>
                            <button
                                className={styles.Modal_Button_Confirm}
                                onClick={(() => deleteMovieData(deleteId))}
                            >
                                <span className={styles.Modal_Button_Span}>{modalInput.yes}</span>
                            </button>
                            <button
                                className={styles.Modal_Button_Undo}
                                onClick={(() => setVisibility(false))}
                            >
                                <span className={styles.Modal_Button_Span}>{modalInput.no}</span>
                            </button>
                        </div>
                    </div>
                )}
        </>
    );
}
//${colorClass ? color : ""}