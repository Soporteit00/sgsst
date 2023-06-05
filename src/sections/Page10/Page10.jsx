import "./Page10.css"
import imgFooter from "../../assets/img/Footer/n-8.png"
import Swal from 'sweetalert2'
export function Page10() {

  Swal.fire({
    title: 'Pasa el mouse para leer la información de las tarjetas.',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  return (
    <>
    <div className="container" id="page10">
        <div className="row justify-content-center">
            <h2>IDENTIFICACIÓN DE PELIGROS.</h2>
          <div className="flip-container">
            <div className="card1">
              <div className="front">
                <p className="pt">RIESGO BIOLÓGICO</p>
              </div>
              <div class="back">
                <p className="p1">En este caso encontramos un grupo de agentes orgánicos, animados o inanimados como los hongos, virus, bacterias, parásitos, pelos, plumas, polen (entre otros), presentes en determinados ambientes laborales, que pueden desencadenar enfermedades infectocontagiosas, reacciones alérgicas o intoxicaciones al ingresar al organismo.</p>
              </div>
            </div>
          </div>

          <div className="flip-container">
            <div className="card1">
              <div className="front">
                <p className="pt">RIESGO FÍSICO</p>
              </div>
              <div class="back">
                <p className="p1">Se refiere a todos aquellos factores ambientales que dependen de las propiedades físicas de los cuerpos, tales como carga física, ruido, iluminación, radiación ionizante, radiación no ionizante, temperatura elevada y vibración, que actúan sobre los tejidos y órganos del cuerpo del trabajador y que pueden producir efectos nocivos, de acuerdo con la intensidad y tiempo de exposición de los mismos.</p>
              </div>
            </div>
          </div>

          <div className="flip-container">
            <div className="card1">
              <div className="front">
                <p className="pt">RIESGO ERGONÓMICO</p>
              </div>
              <div class="back">
                <p className="p1">Involucra todos aquellos agentes o situaciones que tienen que ver con la adecuación del trabajo, o los elementos de trabajo a la fisionomía humana. Representan factor de riesgo los objetos, puestos de trabajo, máquinas, equipos y herramientas cuyo peso,tamaño, forma y diseño pueden provocar sobre-esfuerzo, así como posturas y movimientos inadecuados que traen como consecuencia fatiga fisica y lesiones osteomusculares.</p>
              </div>
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
                <a href="page9" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page11" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
