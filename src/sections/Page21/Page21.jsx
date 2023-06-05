import './Page21.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgPage21 from "../../assets/img/Page23/p1.png"
import imgPage211 from "../../assets/img/Page23/p2.png"
import imgPage212 from "../../assets/img/Page23/p3.png"
import imgPage213 from "../../assets/img/Page23/p4.png"
import imgPage214 from "../../assets/img/Page23/p5.png"
import imgPage215 from "../../assets/img/Page23/p6.png"

export function Page21() {
  return (
    <>
      <div className="container" id='page21'>
        <div className="row">
        <h2>BRIGADA DE EMERGENCIA.</h2>
           <h2 className="animate__animated animate__zoomIn">
          </h2> 
        <img
            src={imgPage1}
            alt=""
            width="80"
            height="75"
            className="animate__animated animate__zoomIn"/>
          
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp"
              src={imgPage21}
              alt=""
              height="255"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp"
              src={imgPage211}
              alt=""
              height="255"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp"
              src={imgPage212}
              alt=""
              height="255"
            />
          </div>
          <div className="row">
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp4"
              src={imgPage213}
              alt=""
              height="255"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp4"
              src={imgPage214}
              alt=""
              height="255"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp5 "
              src={imgPage215}
              alt=""
              height="255"
            />
          </div>
        </div>
      </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <nav className="navbar footer ">
              <div className="container-fluid">
                <div className="">
                  <a className="tf" >
                    <img
                      src={imgFooter}
                      alt="Logo"
                      width="80"
                      height="75"
                    />
                    amar
                  </a>
                </div>
                <a href="page20" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page22" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}