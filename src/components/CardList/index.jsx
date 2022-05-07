import { useState, useEffect } from 'react';
import { CardItem } from '../CardItem';
import { GET } from '../../utils/utils';
import styles from './styles.module.scss';

export function CardList({ searchInput, modalVisibility, setModalVisibility, setMovieData, update, setModalInput, cardlisting }) {
    const [moviesData, setMoviesData] = useState([]);


    useEffect(() => {

        GET().then((movie) => {
            setMoviesData(movie);
        })


    }, [update]);

    return (
        <div className={styles.CardList} >
            <ul className={styles.CardList_container}>
                {moviesData &&
                    moviesData.filter((movie) => movie.title ? movie.title.toLowerCase().trim().includes(searchInput) : "")
                        .map((movie) => (
                            <CardItem
                                cardData={movie}
                                key={movie.id}
                                cardlisting={cardlisting}
                                modalVisibility={modalVisibility}
                                setModalVisibility={setModalVisibility}
                                setMovieData={setMovieData}
                                setModalInput={setModalInput}
                            />
                        ))}
            </ul>
        </div>

    )

}