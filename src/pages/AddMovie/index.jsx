import { useState, useEffect } from "react";
import { AddMovieForm } from "./../../components/AddMovieForm";
import { Modal } from "./../../components/Modal";
import styles from "./styles.module.scss";



export default function AddMovie({ modalInput, setModalInput }) {
    const [modalVisibility, setModalVisibility] = useState(false);

    useEffect(() => {
        setModalInput({ text: "Un nuovo film è stato aggiunto alla lista!" })
        setTimeout(() => {
            setModalVisibility(false);
        }, 3000);
        //eslint-disable-next-line
    }, [modalVisibility]);



    return (
        <>
            <section className={styles.AddMovie_section}>
                <h1>Add a new movie</h1>
                <AddMovieForm setModalVisibility={setModalVisibility} callType="POST" text="Add Movie!" />
                <Modal
                    modalInput={modalInput}
                    isVisible={modalVisibility}
                    colorClass={"green"}
                />
            </section>
        </>
    )
}