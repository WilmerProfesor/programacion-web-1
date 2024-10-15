import {useState,useEffect} from 'react'

import "./HomePage.css";

import ChardCard from '../../Components/ChardCard/ChardCard';

const HomePage = () => {

    const [data, setData]=useState([]);

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/")
        .then(resp=>resp.json())
        .then(info=>setData(info.results));
    },[]);

  return (
    <div >
        {data.map((element)=>{
            return (
                <div id="chards-home">
                    <ChardCard name={element.name} img={element.image}/>
                </div>
            )
        }
        )}
    </div>
    

  )
    
}

export default HomePage