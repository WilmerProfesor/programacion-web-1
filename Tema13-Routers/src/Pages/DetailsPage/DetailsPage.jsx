import React, { useState } from 'react'

import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    
    let { id } = useParams();
    console.log(id);
    

    // const [urlParam, setUrlParam]=useState(useParams)

  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage