import "./Page30.css";
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgVestuarioFemenino from "../../assets/img/Page32/vestuariofemenino.png"

export function Page30() {
  return (
    <>
      <div className="container" id="page30">
        <div className="row">
          <h2 className="animate__animated animate__zoomIn">
            USO DEL UNIFORME.
          </h2>
          <img
            src={imgPage1}
            alt=""
            width="80"
            height="75"
            className="animate__animated animate__zoomIn"
          />
          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="vf"
              src={imgVestuarioFemenino}
              alt=""
              width="750"
              height="480"
            />
          </div>
          {/* <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="vm"
              src="../../src/assets/img/Page32/masculino.png"
              alt=""
              width="490"
              height="310"
            />
          </div> */}
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
                <a href="page29" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page31" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
