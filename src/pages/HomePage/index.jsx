import { useState } from "react";

import { CardList } from "../../components/CardList";
import { Modal } from "../../components/Modal";
import { SearchBar } from "../../components/SearchBar";
import styles from "./styles.module.scss";


export default function HomePage({ DeleteMovieData, modalInput, setModalInput, modalVisibility, setModalVisibility, movieData, setMovieData }) {

    const [update, setUpdate] = useState(false)
    //const [modalVisibility, setModalVisibility] = useState(false);
    const [searchInput, setSearchInput] = useState("")
    //const [movieData, setMovieData] = useState([])
    //const modalInput = { ... }

    // useEffect(() => {
    //     

    //const DeleteMovieData = (e) => {
    //
    //    DELETE(e)
    //        .then(() => {
    //            console.log(e)
    //            setUpdate(!update);
    //            navigate("/")
    //            setModalVisibility(!true)
    //            setModalInput({ text: "Film eliminato correttamente" })
    //            console.log("homepage", movieData.id)
    //        }).then(() => {
    //            setModalVisibility(true)
    //            setTimeout(() => {
    //                setModalVisibility(false);
    //            }, 3000);
    //
    //        })
    //
    //}



    return (
        <>
            <section className={styles.HomePage_section}>
                <SearchBar searchResult={setSearchInput} searchInput={searchInput} />

                <CardList
                    searchInput={searchInput}//pass input data to Cardlist components
                    setModalVisibility={setModalVisibility}// pass the setState for modal visibility
                    setMovieData={setMovieData}
                    update={update}//pass state value for new GET request
                    setModalInput={setModalInput}

                />
                <Modal
                    modalInput={modalInput}
                    isVisible={modalVisibility}
                    setVisibility={setModalVisibility}
                    colorClass={"red"}
                    DeleteMovieData={DeleteMovieData}
                    deleteId={movieData}
                />

            </section>
        </>
    )
}