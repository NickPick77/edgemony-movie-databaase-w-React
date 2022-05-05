import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils/utils";

import { Modal } from "../../components/Modal";
import { CardItem } from "../../components/CardItem";
import { AddMovieForm } from "../../components/AddMovieForm";

import styles from "./styles.module.scss";


export default function EditMovie({ DeleteMovieData, modalInput, setModalInput, modalVisibility, setModalVisibility, movieData, setMovieData }) {
    const location = useLocation();
    const [update, setUpdate] = useState(false)
    const movieId = location.pathname.split("/").reverse()[0];

    useEffect(() => {
        GET(movieId).then((data) => setMovieData(data));
        //eslint-disable-next-line
    }, [update]);



    return (
        <section className={styles.EditMovie}>
            <CardItem
                cardData={movieData}
                setMovieData={setMovieData}
                update={update}
                setUpdate={setUpdate}
                setModalInput={setModalInput}
                setModalVisibility={setModalVisibility}
            />
            <AddMovieForm
                setModalVisibility={setModalVisibility}
                callType="PUT"
                text={"Update Movie"}

            />
            <Modal
                modalInput={modalInput}
                isVisible={modalVisibility}
                setVisibility={setModalVisibility}
                colorClass={"blue"}
                DeleteMovieData={DeleteMovieData}
                deleteId={movieData}
            />
        </section>
    );
}