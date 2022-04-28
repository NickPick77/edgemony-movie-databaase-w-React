import { useState, useEffect } from 'react';
import { CardItem } from '../CardItem';
import { GETMoviesData } from '../../utils/utils';
import styles from './styles.module.scss';

export function CardList() {

    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {

        GETMoviesData().then((movie) => setMoviesData(movie))


    }, []);

    return (
        <div className={styles.CardList}>
            <ul className={styles.CardList_container}>
                {moviesData &&
                    moviesData.map((movie) => (
                        <CardItem cardData={movie} key={movie.id} />
                    ))}
            </ul>
        </div>

    )

}