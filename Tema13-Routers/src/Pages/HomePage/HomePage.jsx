import {useState,useEffect} from 'react';

import {Link} from "react-router-dom";

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
    // <div >
        data.map((element)=>{
            return (
                <div className="chards-home">
                    <Link to={"/details/"+element.id}>
                        <ChardCard name={element.name} img={element.image}/>
                    </Link>
                </div>
            )
        }
        )
    // </div>
    

  )
    
}

export default HomePage