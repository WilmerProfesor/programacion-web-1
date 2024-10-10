
// REACT + COMPONENTS + PROPS + HOOKS

import {useEffect, useState} from 'react'

const ListUser = () => {

    const [users, setUsers] = useState([]);

    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then((dato)=> {
        setUsers(dato);
        console.log(dato);
     })
    .catch(error=>console.log(error))

  return (
    <div>ListUser</div>
  )
}

export default ListUser