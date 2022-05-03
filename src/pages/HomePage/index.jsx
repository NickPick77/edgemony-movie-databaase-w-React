import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DELETE } from "../../utils/utils";
import { CardList } from "../../components/CardList";
import { Modal } from "../../components/Modal";
import { SearchBar } from "../../components/SearchBar";
import styles from "./styles.module.scss";

export function HomePage() {
    const navigate = useNavigate()
    const [update, setUpdate] = useState(false)
    const [modalVisibility, setModalVisibility] = useState(false);
    const [searchInput, setSearchInput] = useState("")
    const [movieData, setMovieData] = useState([])
    const modalInput = { ...{ yes: "yes", no: "no" } }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setModalVisibility(false);
    //     }, 3000);
    // }, [modalVisibility]);

    const DeleteMovieData = () => {

        DELETE(movieData)
            .then(() => {
                console.log()
                setUpdate(!update);
                navigate("/")
                setModalVisibility(true)
                console.log("homepage", movieData.id)
            })

    }



    return (
        <>
            <section className={styles.HomePage_section}>
                <SearchBar searchResult={setSearchInput} searchInput={searchInput} />
                <CardList searchInput={searchInput} modalVisibility={setModalVisibility} IdMoviesData={setMovieData} Update={update} />
                <Modal modalInput={modalInput} isVisible={modalVisibility} colorClass={"red"} deleter={DeleteMovieData} />
            </section>
        </>
    )
}