import axois from 'axios';
import React, { useEffect, useState } from 'react'

const Axois = () => {
    const [userdata, setData] =useState([]);
    useEffect(()=>{
        axois.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response);
            setData(response.data)
        })
    }, [])
  return (
    <div>Axois
    {userdata.map((data)=>{
        return(
            <div>{data.name}</div>
        )
    })}
    </div>
  )
}

export default Axois