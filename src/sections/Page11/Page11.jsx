import "./Page11.css"
import Swal from 'sweetalert2'
import imgFooter from "../../assets/img/Footer/n-8.png"

export function Page11() {

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
          <div className="container" id="page11">
        <div className="row justify-content-center">
            <h2>IDENTIFICACIÓN DE PELIGROS.</h2>
          <div className="flip-container">
            <div className="card1">
              <div className="front1">
                <p className="pt1">RIESGO PSICOSOCIAL</p>
              </div>
              <div class="back1">
                <p className="p">La interacción en el ambiente de trabajo, las condiciones de organización laboral y las necesidades. hábitos, capacidades y demás aspectos personales del trabajador y su entorno social, en un momento dado pueden generar cargas que afectan la salud, el rendimiento en el trabajo y la produccón laboral.</p>
              </div>
            </div>
          </div>

          <div className="flip-container">
            <div className="card1">
              <div className="front1">
                <p className="pt1">CONDICIONES DE SEGURIDAD: RIESGO MECÁNICO</p>
              </div>
              <div class="back1">
                <p className="p">Conjunto  de  condiciones inseguras   que   pueden  causar  lesiones  severas, originadas por la carencia de  protecciones,  en  la operación  de  máquinas o manejo de utensilios de oficina. Entre las que están:
                <li>Cizallamiento</li>
                <li> Amputaciones</li>
                <li> Aplastamientos</li>
                <li> Atrapamientos</li>
                <li> Cortes y punciones</li>
                </p>
              </div>
            </div>
          </div>

          <div className="flip-container">
            <div className="card1">
              <div className="front1">
                <p className="pt1">CONDICIONES DE SEGURIDAD: RIESGO LOCAIVO</p>
              </div>
              <div class="back1">
                <p className="p">Son causados por el lugar de trabajo, indistintamente de la labor que se efectúa en ellos. Los factores de riesgo locativo más conocidos son: Falta de señalización, daños estructurales, condiciones inadecuadas del suelo, piso y techos, etc. </p>
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
                <a href="page10" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page12" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
