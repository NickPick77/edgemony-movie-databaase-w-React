import { useState, useEffect } from 'react';
import { CardItem } from '../CardItem';
import { GETMoviesData } from '../../utils/utils';
import './style.css';

export function CardList() {

    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {

        GETMoviesData("").then((movie) => setMoviesData(movie))


    }, []);

    return (
        <div className='CardList'>
            <ul className='CardList-container'>
                {moviesData &&
                    moviesData.map((movie) => (
                        <CardItem cardData={movie} key={movie.id} />
                    ))}
            </ul>
        </div>

    )

}