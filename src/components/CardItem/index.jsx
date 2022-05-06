
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';


export function CardItem({ cardData, setModalVisibility, setMovieData, setModalInput, cardlisting }) {

    const setDeleteId = () => {
        setModalInput({ text: "", yes: "yes", no: "no" })
        setModalVisibility(true);
        setMovieData(cardData.id);
    }

    return (
        <>
            {cardlisting == true ? (
                <div className={styles.CardItem} >
                    <img className={styles.card_img} src={cardData.img || cardData.poster} alt={cardData.title} />
                    <button className={styles.card_delete_btn} value={cardData.id} onClick={() => setDeleteId()}>❌</button>
                    <div className={styles.CardItem_info}>

                        <Link className='' to={`/edit-movie/${cardData.id}`}>
                            <h2 className={styles.card_title} >{cardData.title}</h2>
                        </Link>
                        <p className={styles.card_year} >{cardData.year}</p>

                        <p className={styles.description} >{cardData.description}</p>
                        <div className={styles.genres_container} >
                            <ul className={styles.genres_ul} >
                                {cardData.genres &&
                                    cardData.genres.map((genre, i) => (
                                        <li className={styles.genre_li} key={i} >{genre}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>

                </div>
            )
                :
                (
                    <div className={styles.CardItem_ext}>
                        no listing
                    </div>
                )
            }</>
    )
}

