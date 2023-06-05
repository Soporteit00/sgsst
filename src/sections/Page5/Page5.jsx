import './Page5.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
export function Page5() {
  return (
    <>
      <div className="container" id="page5">
        <div className="row justify-content-center">
          <h2>OBJETIVOS SG-SST</h2>
          <img
            src={imgPage1}
            alt=""
            width="1100"
            height="75"
            className="animate__animated animate__zoomIn"
          />
          <li>
            Cumplir con las normas legales vigentes en Colombia en cuanto a
            SGSST.
          </li>
          <li>
            Todos los niveles de dirección son responsables por mantener un
            ambiente de trabajo sano y seguro.
          </li>
          <li>
            {" "}
            Todo el personal es reponsable de su seguridad, la del personalbajo
            su cargo y la de la empresa.
          </li>
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
                <a href="page4" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page6" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
