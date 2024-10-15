import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";

const App = () => {
  return (
    <Router>

      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/details" element={<DetailsPage />} /> */}
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App