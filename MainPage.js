import React from 'react';
import Card from './Card';
import "./index.css"
import img from "./interview.png";

export default function MainPage() {
  return (
    <>
    <h1 className='heading'>Card Gallery</h1>
    <div className='cardComp'>
    <Card img={img}/>
    <Card img={img}/>
    <Card img={img}/>
    <Card img={img}/>
    <Card img={img}/>
    <Card img={img}/>
    </div>
    </>
  )
}

