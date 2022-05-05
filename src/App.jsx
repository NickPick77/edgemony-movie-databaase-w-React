
import { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DELETE } from './utils/utils';
import AppStyles from './AppStyles.module.scss';
import Loading from './components/Loading';
//import { HomePage } from '';
//import { AddMovie } from './pages/AddMovie';
//import { EditMovie } from './pages/EditMovie';

const HomePage = lazy(() => import(/* webpackChunkName: "home" */"./pages/HomePage"))
const AddMovie = lazy(() => import(/* webpackChunkName: "add" */"./pages/AddMovie"))
const EditMovie = lazy(() => import(/* webpackChunkName: "edit" */"./pages/EditMovie"))
const Header = lazy(() => import(/*webpackChunkname: "navbar" */ "./components/Header"))


function App() {
  const [modalInput, setModalInput] = useState({ ...{ text: "", yes: "", no: "" } })
  //const navigate = useNavigate()
  const [update, setUpdate] = useState(false)
  const [movieData, setMovieData] = useState([])
  const [modalVisibility, setModalVisibility] = useState(false);

  const DeleteMovieData = (e) => {

    DELETE(e)
      .then(() => {
        console.log(e)
        setUpdate(!update);
        //navigate("/")
        setModalVisibility(!true)
        setModalInput({ text: "Film eliminato correttamente" })
        console.log("homepage", movieData.id)
      }).then(() => {
        setModalVisibility(true)
        setTimeout(() => {
          setModalVisibility(false);
        }, 3000);

      })

  }

  return (
    <div className={AppStyles.App}>
      <Header />

      <Routes>
        <Route path="/edit-movie/:id" element={
          <Suspense fallback={<Loading />}>
            <EditMovie
              modalInput={modalInput}
              setModalInput={setModalInput}
              setModalVisibility={setModalVisibility}
              modalVisibility={modalVisibility}
              DeleteMovieData={DeleteMovieData}
              setMovieData={setMovieData}
              movieData={movieData}
            />
          </Suspense>}

        />
        <Route path="/add-movie" element={
          <Suspense fallback={<Loading />}>
            <AddMovie
              modalInput={modalInput}
              setModalInput={setModalInput}
            />
          </Suspense>}
        />
        <Route path="/" index element={
          <Suspense fallback={<Loading />}>
            <HomePage
              modalInput={modalInput}
              setModalInput={setModalInput}
              setModalVisibility={setModalVisibility}
              modalVisibility={modalVisibility}
              DeleteMovieData={DeleteMovieData}
              setMovieData={setMovieData}
              movieData={movieData}
              update={update}
            />
          </Suspense>}
        />
      </Routes>


    </div >
  );
}

export default App;
