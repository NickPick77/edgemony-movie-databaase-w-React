
import { useState, Suspense, lazy } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { DELETE } from './utils/utils';
import AppStyles from './AppStyles.module.scss';
import Loading from './components/Loading';
//import { HomePage } from '';
//import { AddMovie } from './pages/AddMovie';
//import { EditMovie } from './pages/EditMovie';

const HomePage = lazy(() => import(/* webpackChunkName: "home" */"./pages/HomePage"))
const AddMovie = lazy(() => import(/* webpackChunkName: "add" */"./pages/AddMovie"))
const EditMovie = lazy(() => import(/* webpackChunkName: "edit" */"./pages/EditMovie"))


function App() {
  const [modalInput, setModalInput] = useState({ ...{ text: "", yes: "", no: "" } })
  const navigate = useNavigate()
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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-movie">Add movie</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/edit-movie/:id" element={
            <EditMovie
              modalInput={modalInput}
              setModalInput={setModalInput}
              setModalVisibility={setModalVisibility}
              modalVisibility={modalVisibility}
              DeleteMovieData={DeleteMovieData}
              setMovieData={setMovieData}
              movieData={movieData}
            />}
          />
          <Route path="/add-movie" element={
            <AddMovie
              modalInput={modalInput}
              setModalInput={setModalInput}
            />}
          />
          <Route path="/" index element={
            <HomePage
              modalInput={modalInput}
              setModalInput={setModalInput}
              setModalVisibility={setModalVisibility}
              modalVisibility={modalVisibility}
              DeleteMovieData={DeleteMovieData}
              setMovieData={setMovieData}
              movieData={movieData}
            />}
          />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
