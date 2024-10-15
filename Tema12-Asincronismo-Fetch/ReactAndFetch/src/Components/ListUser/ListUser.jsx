
// REACT + COMPONENTS + PROPS + HOOKS
import "./ListUser.css";

import {useEffect, useState} from 'react'

import UserCard from '../UserCard/UserCard';

const ListUser = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
      fetch("https://api.github.com/users")
      .then(response => response.json())
      .then((dato)=> {
          setUsers(dato);
        })
        .catch(error=>console.log(error))
      },[]);
      
  return (
    <div className='listUsers'>
        {
          users.map((user)=>
            // <UserCard avatar_url={user.avatar_url} login={user.login} />
            <UserCard avatar_url={user.avatar_url} login={user.login} />
          )
        }
    </div>
  )
}

export default ListUser