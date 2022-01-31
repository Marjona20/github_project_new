import React from 'react'
import "./style.css"
import { data } from '../../mock';

const Cards = () => {
    return (
        <div className="container">
            <h1>한국어 비디 <span>오</span> 수<span>업</span> </h1>
             <h1>Kares tili video <span>darsliklar</span>  to’plami</h1>
            <div className="row">
                {
                  data.map(value=>{
                    return(
                     <div key={value.id} className="card">
                         <h4>{value.number}</h4>
                         <div className="title">
                             <p style={{color:"#FF0000",}}>{value.first}</p>
                             <p className="mx-2">{value.daraja}</p>
                             <p style={{color: "#FF0000"}}>daraja</p>
                         </div>
                         <p>{value.text}</p>
                         <div className="line"></div>
                     </div>)})  
                }
            </div>
        </div>
    )
}
export default Cards;