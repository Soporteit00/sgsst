import "./Page27.css";
import Swal from 'sweetalert2'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgExamenes from "../../assets/img/Page29/examenes.jpg"
import imgComunicacion from "../../assets/img/Page29/comunicacion.jpg"

export function Page27() {

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
      <div className="container" id="page27">
        <div className="col-md-12 text-center">
          <div className="box animate__animated animate__zoomIn">
            <div className="card4">
              <div className="imgBx">
                <img src={imgExamenes} alt="" />
              </div>
              <h2  className="h2"> EXAMENES  MÉDICOS OCUPACIONALES.</h2>
              <div className="details1">
                <p className="pc">-Entrega de resultados de los exámenes médicos ocupacionales. <br />
                -Seguimiento a las recomendaciones y restricciones. <br /> <br /> </p>
              </div>
            </div>
            <div className="card4 ">
              <div className="imgBx ">
                <img src={imgComunicacion} alt="" />
              </div>
              <h2 className="h2">MECANISMOS DE COMUNICACIÓN.</h2>
              <div className="details1">
              <p  className="pc">-Reporte de incidentes y accidentes laborales. <br />
                -Reporte de condiciones de salud. <br /> </p>
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
                <a href="page26" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page28" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
