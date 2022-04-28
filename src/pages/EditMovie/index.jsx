import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GETMoviesData } from "../../utils/utils";

import { CardItem } from "../../components/CardItem";
import { AddMovieForm } from "../../components/AddMovieForm";

import styles from "./styles.module.scss";

export function EditMovie() {
    const location = useLocation();
    const [movieData, setMovieData] = useState({});
    const movieId = location.pathname.split("/").reverse()[0];

    useEffect(() => {
        GETMoviesData(movieId).then((data) => setMovieData(data));
    }, []);

    return (
        <section className={styles.EditMovie}>
            <CardItem cardData={movieData} />
            <AddMovieForm setModalVisibility={false} callType="PUT" text={"Update Movie"} />
        </section>
    );
}