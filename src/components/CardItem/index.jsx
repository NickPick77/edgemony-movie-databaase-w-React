
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';


export function CardItem({ cardData, setModalVisibility, setMovieData, setModalInput }) {

    const setDeleteId = () => {
        setModalInput({ text: "", yes: "yes", no: "no" })
        setModalVisibility(true);
        setMovieData(cardData.id);
    }

    return (
        <div className={styles.CardItem}  >
            <img src={cardData.img || cardData.poster} alt={cardData.title} />
            <button value={cardData.id} onClick={() => setDeleteId()}>❌</button>
            <div>

                <Link to={`/edit-movie/${cardData.id}`}>
                    <h2>{cardData.title}</h2>
                </Link>
                <p>{cardData.year}</p>

                <p className={styles.description}>{cardData.description}</p>
                <div className={styles.genre}>
                    <ul>
                        {cardData.genres &&
                            cardData.genres.map((genre, i) => (
                                <li key={i}>{genre}</li>
                            ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}
