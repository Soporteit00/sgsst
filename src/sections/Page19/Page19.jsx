import './Page19.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgPage19 from "../../assets/img/Page21/c1.png"
import imgPage191 from "../../assets/img/Page21/c2.png"
import imgPage192 from "../../assets/img/Page21/c3.png"
import imgPage193 from "../../assets/img/Page21/c4.png"
import imgPage194 from "../../assets/img/Page21/c5.png"
import imgPage195 from "../../assets/img/Page21/c6.png"

export function Page19() {
  return (
    <>
      <div className="container" id='page19'>
        <div className="row">
          <h2>COMITÉ DE CONVIVENCIA.</h2>
          <h2 className="animate__animated animate__zoomIn">
          </h2>
          <img
            src={imgPage1}
            alt=""
            width="75"
            height="75"
            className="animate__animated animate__zoomIn"
          />
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp"
              src={imgPage19}
              alt=""
              height="255"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp"
              src={imgPage191}
              alt=""
              height="255"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp"
              src={imgPage192}
              alt=""
              height="255"
            />
          </div>
          <div className="row">
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp4"
              src={imgPage193}
              alt=""
              height="255"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp4"
              src={imgPage194}
              alt=""
              height="255"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgp5 "
              src={imgPage195}
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
                  <a className="tf">
                    <img
                      src={imgFooter}
                      alt="Logo"
                      width="80"
                      height="75"
                    />
                    amar
                  </a>
                </div>
                <a href="page18" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page20" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}