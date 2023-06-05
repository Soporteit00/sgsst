import "./Page33.css";
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgCorporativo from "../../assets/img/Page32/corpórativo.png"

export function Page33() {
  return (
    <>
      <div className="container" id="page33">
        <div className="row">
          <h2 className="animate__animated animate__zoomIn">
            ACCESORIOS Y COMPLEMENTOS.
          </h2>
          <img
            src={imgPage1}
            alt=""
            width="80"
            height="70"
            className="animate__animated animate__zoomIn"
          />

          <div className="col-3 animate__animated animate__zoomIn">
            <img
              className="vm"
              src={imgCorporativo}
              alt=""
              width="750"
              height="475"
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
                <a href="page32" className="btn2 bi bi-arrow-left-circle"></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
