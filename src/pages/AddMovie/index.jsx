import { useState, useEffect } from "react";
import { AddMovieForm } from "./../../components/AddMovieForm";
import { Modal } from "./../../components/Modal";
import styles from "./styles.module.scss";



export function AddMovie() {
    const [modalVisibility, setModalVisibility] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setModalVisibility(false);
        }, 3000);
    }, [modalVisibility]);



    return (
        <>
            <section className={styles.AddMovie_section}>
                <h1>Add a new movie</h1>
                <AddMovieForm setModalVisibility={setModalVisibility} callType="POST" text="Add Movie!" />
                <Modal
                    text="Un nuovo film è stato aggiunto alla lista!"
                    isVisible={modalVisibility}
                    colorClass={"green"}
                />
            </section>
        </>
    )
}