import React from "react";
import "./Home.css";
import img1 from "../assets/img/Home/img-1.png";
import imgFooter from "../assets/img/Footer/n-8.png";

export function Home() {

  return (
    <>

      <div className="container" id="./">
       <div className="row justify-content-center">
        <h2>Inducción y reinducción del SGSST.</h2>
        <h4>Gestión del talento humano.</h4>
        <img src={img1} alt="" className='imgh' />
        </div>
      </div>
      
      <footer>
        <div className="container">
          <div className="row">
          <nav className="navbar footer ">
            <div className="container-fluid">
              <div className="">
                <a className="tf" href="#">
                  <img
                    src={imgFooter}
                    alt="Logo"
                    width="80"
                    height="75"
                  />amar
                </a>
              </div>
              <a href="page1" className="btn bi bi-arrow-right-circle "></a>

            </div>
          </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

