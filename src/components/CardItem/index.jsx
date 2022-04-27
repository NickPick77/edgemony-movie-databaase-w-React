import { DELETEMovieData } from '../../utils/utils';
import './style.css';


export function CardItem({ cardData }) {
    return (
        <div className='CardItem'>
            <a href='#'>
                <h2>{cardData.title}</h2>
            </a>

            <p>{cardData.year}</p>
            <img src={cardData.img || cardData.poster} alt={cardData.title} />
            <p>{cardData.description}</p>
            <div className='genre'>
                <ul>
                    {cardData.genres &&
                        cardData.genres.map((genre, i) => (
                            <li key={i}>{genre}</li>
                        ))}
                </ul>
                <button value={cardData.id} onClick={() => DELETEMovieData(cardData.id)}>Remove</button>
            </div>
        </div>
    )
}
