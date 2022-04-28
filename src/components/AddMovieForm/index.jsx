import { useState } from "react"
import { useLocation } from "react-router-dom";
import { POSTMovieData, PUTMovieData } from "../../utils/utils";
import styles from "./styles.module.scss";

export function AddMovieForm({ setModalVisibility, callType, text }) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [genres, setGenrese] = useState("");

    let location = useLocation();
    const movieId = location.pathname.split("/").reverse()[0];

    const unStringifyGenres = (genres) => genres.split(",");

    const addNewMovie = (e) => {
        e.preventDefault();

        if (callType === "POST") {
            POSTMovieData("", {
                title,
                year,
                imgUrl,
                genres: unStringifyGenres(genres),
                description,
            });

            setModalVisibility(true);
        } else {
            PUTMovieData(movieId, {
                title,
                year,
                imgUrl,
                genres: unStringifyGenres(genres),
                description,
            });
        }
    };


    return (
        <form onSubmit={addNewMovie} className={styles.AddMovieForm_form}>
            <label htmlFor="title">Title</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                name="title"
                required
            />
            <label htmlFor="">Year</label>
            <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="text"
                id="year"
                name="year"
                required
            />
            <label htmlFor="">Description</label>
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                id="description"
                name="year"
                required
            />
            <label htmlFor="imgUrl">Image Url</label>
            <input
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                type="text"
                id="imgUrl"
                name="imgUrl"
                required
            />
            <label htmlFor="genres">Genres</label>
            <input
                value={genres}
                onChange={(e) => setGenrese(e.target.value)}
                type="text"
                id="genres"
                name="genres"
                required
            />
            <input type="submit" value={text} />
        </form>
    )
}