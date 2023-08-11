import React from 'react'
import Hero1 from '../images/Hero2_1.jpg';
import Hero4 from '../images/Hero2_2.jpg';
import Hero5 from '../images/Hero2_3.jpg';
import '../styles/Hero2.css';
export default function Hero2() {
  return (
    <div className="body">
    <div className='card-body'>
       <div className="card" style={{width : "765rem"}}>     
  <img src={Hero1} className="card-img-top" alt="..."/>  
   </div> 

   <div className="card" style={{width : "765rem"}}>
  <img src={Hero4} className="card-img-top" alt="..."/>
   </div>
    </div>
    <div className="second">
      <h1 className="head">Create Friendship Day </h1>
      <div className="card2">
        <img src={Hero5} alt="" />
      </div>
    </div>
    </div>
  )
}
