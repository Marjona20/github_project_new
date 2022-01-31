import React from 'react'
import { data1 } from '../../mock';
import strelka from '../../Assets/icons/vektor__.svg'
import "./style.css"

const UsefulInformation = () => {
    return (
        <div className='usefulInformation'>
            <div className="container">
            <h1 style={{marginBottom:"30px"}}>Foydali ma'lumotlar</h1>
            <div className="cards">
            {
                       data1.map(value=>{
                           return(
                               <div key={value.id} className="card">
                                   <div className="card1">
                                       <div className="card2">
                                           <p>Javob</p>
                                           <h6>Ko'p beriladigan savollar</h6>
                                       </div>
                                       <img src={value.picture} alt="" />
                                   </div>
                                  <div className="d-flex">
                                      <div className="row mt-3">
                                      <img src={strelka} alt="" style={{width:"10px", marginLeft:"25px"}}/> <p style={{marginTop:"15px", marginLeft:"10px"}}>{value.text1}</p>
                                      </div>
                                  </div>
                                  <div className="d-flex">
                                      <div className="row mt-3">
                                      <img src={strelka} alt="" style={{width:"10px", marginLeft:"25px"}}/> <p style={{marginTop:"15px", marginLeft:"10px"}}>{value.text2}</p>
                                      </div>
                                  </div>
                                  <div className="d-flex">
                                      <div className="row mt-3">
                                      <img src={strelka} alt="" style={{width:"10px", marginLeft:"25px"}}/> <p style={{marginTop:"15px", marginLeft:"10px"}}>{value.text3}</p>
                                      </div>
                                  </div>
                               </div>
                           )
                       })
                   }
            </div>
            </div>
        </div>
    )
}
export default UsefulInformation;
