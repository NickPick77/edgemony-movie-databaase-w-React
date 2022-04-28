import { Link } from 'react-router-dom';
import { DELETEMovieData } from '../../utils/utils';
import styles from './styles.module.scss';


export function CardItem({ cardData }) {
    return (
        <div className={styles.CardItem}>
            <button value={cardData.id} onClick={(e) => DELETEMovieData(e.target.value)}>Remove</button>
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
