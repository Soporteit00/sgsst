import "./Page25.css";
import imgFooter from "../../assets/img/Footer/n-8.png"

export function Page25() {
  return (
    <>
      <div className="container" id="page25">
        <div className="col-md-12 text-center">
          <div class="box animate__animated animate__zoomIn">
            <div class="card3">
              <div class="imgBx">
                <p className="A">
                  <h2>ACCIDENTE GRAVE.</h2>Aquel que trae como consecuencia
                  amputación de cualquier segmento corporal; fractura de huesos
                  largos (fémur, tibia, peroné, húmero, radio y cúbito); trauma
                  craneoencefálico; quemaduras de segundo y tercer grado;
                  lesiones severas de mano, tales como aplastamiento o
                  quemaduras; lesiones severas de columna vertebral con
                  compromiso de médula espinal; lesiones oculares que
                  comprometan la agudeza o el campo visual o lesiones que
                  comprometan la capacidad auditiva.
                </p>
              </div>
              <div class="details1"></div>
            </div>

            <div class="card3">
              <div class="imgBx">
                <p className="AC">
                  <h2>ACCIDENTE LEVE.</h2>
                  Son aquellos accidentes en los cuales el trabajador no sufre
                  una lesión grave.
                </p>
              </div>
              <div class="details1"></div>
            </div>

            <div class="card3">
              <div class="imgBx">
                <p className="AC">
                  <h2>ACCIDENTE MORTAL.</h2>
                  Son aquellos accidentes en los cuales se presenta la muerte
                  del trabajador.
                </p>
              </div>
              <div class="details1"></div>
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
                <a href="page24" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page26" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
