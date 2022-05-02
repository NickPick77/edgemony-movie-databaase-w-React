import { useState, useEffect } from 'react';
import { CardItem } from '../CardItem';
import { GET } from '../../utils/utils';
import styles from './styles.module.scss';

export function CardList({ searchInput }) {

    const [moviesData, setMoviesData] = useState([]);
    const [update, setUpdate] = useState(false)

    useEffect(() => {

        GET().then((movie) => setMoviesData(movie))

    }, []);
    useEffect(() => {

        GET().then((movie) => setMoviesData(movie))

    }, [update]);

    return (
        <div className={styles.CardList} >
            <ul className={styles.CardList_container}>
                {moviesData &&
                    moviesData.filter((movie) => movie.title.toLowerCase().trim().includes(searchInput)) //|| movie.genres.toLowerCase().trim().includes(searchInput))
                        .map((movie) => (
                            <CardItem cardData={movie} key={movie.id} update={update} setUpdate={setUpdate} />
                        ))}
            </ul>
        </div>

    )

}