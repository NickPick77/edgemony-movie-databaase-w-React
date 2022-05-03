import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils/utils";
import { Modal } from "../../components/Modal";

import { CardItem } from "../../components/CardItem";
import { AddMovieForm } from "../../components/AddMovieForm";

import styles from "./styles.module.scss";

export function EditMovie() {
    const location = useLocation();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [update, setUpdate] = useState(false)
    const [movieData, setMovieData] = useState({});
    const movieId = location.pathname.split("/").reverse()[0];


    useEffect(() => {
        GET(movieId).then((data) => setMovieData(data));
    }, [update]);

    useEffect(() => {
        setTimeout(() => {
            setModalVisibility(false);
        }, 3000);
    }, [modalVisibility]);

    return (
        <section className={styles.EditMovie}>
            <CardItem cardData={movieData} update={update} setUpdate={setUpdate} />
            <AddMovieForm setModalVisibility={setModalVisibility} callType="PUT" text={"Update Movie"} />
            <Modal text="film modificato" isVisible={modalVisibility} colorClass={"blue"} />
        </section>
    );
}