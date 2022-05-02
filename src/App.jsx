import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppStyles from './AppStyles.module.scss';
import { HomePage } from './pages/HomePage';
import { AddMovie } from './pages/AddMovie';
import { EditMovie } from './pages/EditMovie';

function App() {


  return (
    <Router>
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
        <Routes>
          <Route path="/edit-movie/:id" element={<EditMovie />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/" index element={<HomePage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
