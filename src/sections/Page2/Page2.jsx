import "./Page2.css";
import imgPage2 from "../../assets/img/Page2/leyes.png"
import imgFooter from "../../assets/img/Footer/n-8.png"
export function Page2() {
  return (
    <>
      <div className="container" id="page2">
        <div className="row justify-content-center ">
          <div className="col-md-12 ">
            <p>
              En este curso aprenderás sobre el cumplimiento a lo establecido en
              la ley 1562 de 2012, el Decreto 1072 de 2015, La Resolución 0312
              de 2019 y demas normas vigentes en materia de Seguridad y Salud en
              el trabajo (SGSST) en Colombia, la Asociación Mutual Amigo Real ha
              estructurado el sistema de gestión de SST, cuyo objetivo principal
              es propiciar el mejoramiento continuo así como el control de las
              condiciones laborales y de los riesgos y peligros presentes en los
              lugares de trabajo.
            </p>
            <h2>¡Comencemos!</h2>

          </div>
          <img align="center"
              src={imgPage2}
              alt=""
              className="leyes  animate__animated animate__flipInY" />
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
                  />amar
                </a>
              </div>
              <a href="page1" className="btn1 bi bi-arrow-left-circle"></a>
              <a href="page3" className="btn bi bi-arrow-right-circle "></a>

            </div>
          </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
