import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DELETE } from '../../utils/utils';
import styles from './styles.module.scss';


export function CardItem({ cardData, update, setUpdate }) {
    const [updated, setUpdated] = useState(false)

    const DeleteMovieData = (e) => {
        DELETE(e.target.value).then(() => setUpdate(true)).then(() => setUpdated(true))
    }


    return (
        <div className={styles.CardItem} updated={update}>
            <button value={cardData.id} onClick={(e) => DeleteMovieData(e)}>❌</button>
            <Link to={`/edit-movie/${cardData.id}`}>
                <h2>{cardData.title}</h2>
            </Link>
            <p>{cardData.year}</p>
            <img src={cardData.img || cardData.poster} alt={cardData.title} />
            <p>{cardData.description}</p>
            <div className={styles.genre}>
                <ul>
                    {cardData.genres &&
                        cardData.genres.map((genre, i) => (
                            <li key={i}>{genre}</li>
                        ))}
                </ul>
            </div>

        </div>
    )
}
