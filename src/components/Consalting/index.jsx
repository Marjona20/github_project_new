import React from 'react'
import "./style.css"
import head from '../../Assets/images/head.png'
import img from '../../Assets/images/image12.png'
import iks from '../../Assets/icons/Group 90.svg'
import true1 from '../../Assets/icons/Group 85.svg'
import img1 from '../../Assets/images/Group 86.png'

const Consalting = () => {
    return (
        <div className="consalting">
            <div className="page1">
            <div className="d-flex">
                 <div className="row">
                     <p style={{marginTop: "50px", fontSize:"25px"}}>------------------------------------------------------------------------------------------</p>
                     <div className='card'>
                     <div className="text">
                                 <h2 style={{color: "yellow"}}>컨설팅</h2>
                                 <h2 style={{color: "white"}}>Konsalting</h2>
                             </div>
                             <img src={head} alt="" style={{width:'155px', height: '155px'}}/>
                     </div>
                 </div>
            </div>
            
            </div>
            <div className="page2">
                <div className="d-flex">
                    <div className="row">
                        <div className="col-5">
                            <button>Kursni tugatib</button>
                            <h6>Ertaga Koreaga yo'l olamiz</h6>
                            <img src={img} alt="" style={{width:"450px", height:"220px"}}/>
                            <img src={iks} alt="" style={{position:"absolute", top:"-65px", right:"35px"}}/>
                            <img src={true1} alt="" style={{position:"absolute", top:"25px", right: "30px"}}/>
                            <div className="card2">
                                <div className="card3">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="card4">
                                <p>Kursni tugat va Koreya sen uchun</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                           <div className="card1">
                           <h1>Koreyada o’qish</h1>
                            <p>Koreyada o’qishni hohlaysizmi? 
Unda hoziroq bizga murojat qiling. Sizninig kelajagingiz Koreya orqali yaralishi mumkun . Orzuingizdagi universitetlar sizni kutmoqda. </p>
                        <button>Batafsil</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Consalting;