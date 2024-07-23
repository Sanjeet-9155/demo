import React from 'react'
import "./index.css"

export default function Card(props) {
  return (
    <>
    <div className='card'>
       <img src={props.img} alt="" style={{height: 200, textWrap: 'wrap'}}/>
       <h3>Nature 1 Image</h3>

    </div>
    </>
  )
}
