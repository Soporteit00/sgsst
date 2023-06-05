import React from "react";
import './Menu.css'
import imgMenu from "../../assets/img/Menu/n-10.png"
export function Menu(){
    return(
        <>
   <div className="container" id="menu">
    <div className="row justify-content">
      <nav className="navbar menu  ">
     <a className="titulo" href="/"> 
      <img src={imgMenu} alt="Logo" width="80" height="80" />SG SST
     </a>
     </nav>
     </div>
   </div>
   
        </>
    )
}