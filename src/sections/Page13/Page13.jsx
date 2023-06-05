import "./Page13.css"
import Swal from 'sweetalert2'
import imgFooter from "../../assets/img/Footer/n-8.png"

export function Page13() {

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
      <div className="container" id="page13">
        <div className="row justify-content-center">
          <h2>IDENTIFICACIÓN DE PELIGROS.</h2>
          <div className="flip-container1">
            <div className="card1">
              <div className="front1">
                <p className="pt1">
                  CONDICIONES DE SEGURIDAD: RIESGO DE TECNOLÓGICO{" "}
                </p>
              </div>
              <div class="back1">
                <p className="p">
                  Es la probabilidad de que un objeto, material o proceso
                  peligroso, una sustancia tóxica o peligrosa o bien un fenómeno
                  debido a la interacción de estos, ocasione un número
                  determinado de consecuencias a la salud, la economía, el medio
                  ambiente y el desarrollo integral de un sistema.
                  <li> Riesgo por Incendio o explosión.</li>
                  <li> Riesgo por escapes o derrames.</li>
                  <li> Riesgo de fuga.</li>
                </p>
              </div>
            </div>
          </div>

          <div className="flip-container1">
            <div className="card1">
              <div className="front1">
                <p className="pt1">RIESGO NATURAL</p>
              </div>
              <div class="back1">
                <p className="p">
                  se puede definir como la probabilidad de que un territorio y
                  la sociedad que habita en él, se vean afectados por episodios
                  naturales de rango extraordinario. En otras palabras, la
                  vulnerabilidad de una población o region a una amenaza o
                  peligro natural.
                </p>
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
                <a href="page12" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page14" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
