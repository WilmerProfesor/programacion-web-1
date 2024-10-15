import "./App.css";

import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    
    <div className="App">
      <Header />
      <NavBar />
      <HomePage />
      
    </div>

  )
}

export default App