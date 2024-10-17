
import "./App.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './Components/Header/Header';

//importar las páginas de la App
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import CharacterPage from "./Pages/CharactersPage/CharacterPage";

const App = () => {
  return (
    <div className='App'> 
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App