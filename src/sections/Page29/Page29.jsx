import "./Page29.css";
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgResiduos from "../../assets/img/Page31/residuos.jpg"
import imgResiduos1 from "../../assets/img/Page31/residuos2.jpg"
import imgResiduos2 from "../../assets/img/Page31/residuos3.jpg"

export function Page29() {
  return (
    <>
      <div className="container" id="page29">
        <div className="row">
          <h2 className="animate__animated animate__zoomIn">
            INSPECCIONES DE SEGURIDAD
          </h2>
          <img
            src={imgPage1}
            alt=""
            width="80"
            height="75"
            className="animate__animated animate__zoomIn"
          />
          <h4>MANEJO DE RESIDUOS.</h4>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgr"
              src={imgResiduos}
              alt=""
              width="355"
              height="260"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgr2"
              src={imgResiduos1}
              alt=""
              width="355"
              height="260"
            />
          </div>
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="imgr3"
              src={imgResiduos2}
              alt=""
              width="355"
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
                <a href="page28" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page30" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
