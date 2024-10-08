import { useState } from 'react'
import './App.css'

//Import COmponents
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AnimalCard from './Components/AnimalCard/AnimalCard'

const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AnimalCard name="Iguana" img="https://cdn0.ecologiaverde.com/es/posts/7/1/2/la_iguana_esta_en_peligro_de_extincion_4217_600_square.jpg"/>
      <AnimalCard name="Perro" img="https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg"/>
      <AnimalCard name="Gato" img="https://images.ctfassets.net/denf86kkcx7r/4IPlg4Qazd4sFRuCUHIJ1T/f6c71da7eec727babcd554d843a528b8/gatocomuneuropeo-97?fm=webp&w=612" />
      <AnimalCard name="Conejo" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5aOvEJEC6bBkRL-J7sBXxtwREYTGMLjnTDg&s" />
      <Footer />
    </>
  )
}

export default App
