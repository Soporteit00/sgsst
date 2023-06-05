import "./Page23.css";
import Swal from 'sweetalert2'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgLaboral from "../../assets/img/Page25/laboral.jpg"
import imgLaboral2 from "../../assets/img/Page25/laboral2.jpg"
import imgIncidente2 from "../../assets/img/Page25/incidente2.jpg"
import imgIncidente from "../../assets/img/Page25/incidente.jpg"

export function Page23() {

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
    <div className="container" id="page23">
    <div className="row justify-content-start">
    <div className="col-6">
      <div className="body">
        <div className="cardM">
          <picture className="imgBox">
            <img src={imgLaboral} alt="" />
            <img src={imgLaboral2} alt="" />
          </picture>
          <div className="details">
            <div className="content2">
              <h2 className="text-center">ENFERMEDAD LABORAL.</h2>
              <p className="text-center">
              Es la contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar. Art. 4, Ley 1562 de 2012. 
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="col-6">        
          <div className="body">
            <div className="cardM">
              <picture className="imgBox">
                <img
                  src={imgIncidente2}
                  alt=""
                />
                <img
                  src={imgIncidente}
                  alt=""
                />
              </picture>
              <div className="details">
                <div className="content2">
                  <h2 className="text-center ht">INCIDENTE DE TRABAJO</h2>
                  <p className="text-center ">
                  Suceso acaecido en el curso del trabajo o en relación con este, que tuvo el potencial de ser un accidente, en el que hubo personas involucradas sin que sufrieran lesiones o se presentaran daños a la propiedad y/o pérdida en los procesos. (Resolución 1401 2007) .
                  </p>
                </div>
              </div>
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
                <a href="page22" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page24" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
