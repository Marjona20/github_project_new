import React from 'react'
import img from '../../Assets/images/logo-1.png'
import img1 from '../../Assets/icons/Vector.svg'
import img2 from '../../Assets/images/video.png'
import img3 from '../../Assets/images/mens.png'
import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css'


const Header = () => {
    return (
     <div className="header">
       <div className="container">
       <div className="navbar d-flex">
           <div className="logo" >
               <img src={img} alt="" style={{width:'200px', height:'60px'}}/>
           </div>
           <ul className="navbar-nav" style={{display:'flex'}}>
               <li className="nav-item">
                   <a href="#" className="nav-link">Darslar <img src={img1} alt="" /></a>
               </li>
               <li className="nav-item">
                   <a href="#" className="nav-link">Topik <img src={img1} alt="" /></a>
               </li>
               <li className="nav-item">
                   <a href="#" className="nav-link">Konsalting</a>
               </li>
               <li className="nav-item">
                   <a href="#" className="nav-link">Kitoblar</a>
               </li>
               <li className="nav-item">
                   <a href="#" className="nav-link">To'lov</a>
               </li>
               <li className="nav-item">
                   <a href="#" className="nav-link">Biz Haqimizda</a>
               </li>
           </ul>
           <div className="registration">
               <a href="#">Kirish</a>
               <button type='button' className="btn">Registratsiya</button>
           </div>
      
      
       </div>
       <div className="cards">
            <div className="card1">
                <h5>우리의 온라인 수업은 본인에게 흥미를 줄 것이다</h5>
                <p>각 수업은 당신을 위해 준비되어 있습니다.시간을 설정하여 우리의 수업을 볼 수 있습니다. LinCor, 한국어를 함께 배우자</p>
            </div>
            <div className="card3">
                <img src={img2} alt="" />
                <p>Qo'llanma</p>
            </div>
            <div className="card2">
                <h5>Online darslarimiz sizni qiziqtiradi</h5>
                <p>Biz barcha darslarimizni siz uchun tayyorladik
Bo’sh vaqtingizni belgilagan holda bizning darslarimizni ko’rishingiz mumkun.</p>
            </div>
       </div>
       <div className="mens">
           <img src={img3} alt="" />
       </div>
       </div>
     </div>
    )
}

export default Header;