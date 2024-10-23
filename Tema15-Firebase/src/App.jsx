import {useState, useEffect} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./Firebase/firebaseConfig" 

import "./App.css"

const App = () => {

  const [data, setData]=useState([]);

  useEffect(()=>{

    const chargeData=async()=>{
      const q = query(collection(db, "Aves"));
      const querySnapshot = await getDocs(q);
      const info=[];
      querySnapshot.forEach((doc) => {        
        info.push({...doc.data(),id:doc.id})
        //console.log(doc.id, " => ", doc.data());
      });      
      console.log(info);
      setData(info);
    }
    chargeData();
  },[]);

  return (
    <div className='App'>      
      {
        data.map((item)=>{
          return(
          <div key={item.id} className='card-bird'>
            <img className='img-bird' src={item.imagenUrl} alt="" />
            <div className='info-bird'>
              <h3>{item.nombreComun}</h3>
              <p>{item.nombreCientifico}</p>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default App