import "./Page28.css";
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgElementos from "../../assets/img/Page30/elementos.png"
import imgRiesgoPeligro from "../../assets/img/Page30/riesgopeligro.jpg"
import imgInspecciones from "../../assets/img/Page30/inspecciones.jpg"

export function Page28() {
  return (
    <>
      <div className="container" id="page28">
        <div className="row">
          <h2>INSPECCIONES DE SEGURIDAD.</h2>
          <img
            src={imgPage1}
            alt=""
            width="1100"
            height="75"
            className="animate__animated animate__zoomIn"
          />
          <div className="col-3 animate__animated animate__slideInLeft">
            <h3>
              USO DE LOS ELEMENTOS DE <br />
              PROTECCIÓN PERSONAL.
            </h3>
            <img
              className="img3"
              src={imgElementos}
              alt=""
              width="290"
              height="260"
            />
          </div>
          <div className="col-3 animate__animated animate__slideInDown">
            <h3>RIESGO Y PELIGRO.</h3>
            <img className="imgrp"
              src={imgRiesgoPeligro}
              alt=""
              width="360"
              height="260"
            />
          </div>

          <div className="col-3 animate__animated animate__slideInRight">
            <h3 className="imgrpi">INSPECCIÓN DE SEGURIDAD.</h3>
            <img className="imgrpi"
              src={imgInspecciones}
              alt=""
              width="360"
              height="260"
            />
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
                <a href="page27" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page29" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
