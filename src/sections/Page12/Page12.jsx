import "./Page12.css"
import Swal from 'sweetalert2'
import imgFooter from "../../assets/img/Footer/n-8.png"

export function Page12() {

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
       <div className="container" id="page12">
        <div className="row justify-content-center">
            <h2>IDENTIFICACIÓN DE PELIGROS.</h2>
          <div className="flip-container">
            <div className="card1">
              <div className="front">
                <p className="pt">CONDICIONES DE SEGURIDAD: RIESGO PÚBLICO</p>
              </div>
              <div class="back">
                <p className="p1">Son todos aquellos peligros a los que estamos expuestos en el diario vivir  y en el desempeño de rutinas cotidianas.
                Se clasifican en los tres momentos del riesgo público: 
               <li> Pre incidente</li>
               <li>Mientras se presenta la situación</li>
               <li>Después de presentada la situación.</li>
               </p>
              </div>
            </div>
          </div>

          <div className="flip-container">
            <div className="card1">
              <div className="front">
                <p className="pt">CONDICIONES DE SEGURIDAD: RIESGO ELECTRICO</p>
              </div>
              <div class="back">
                <p className="p1">Se refiere a la posibilidad de contacto del cuerpo humano con la corriente eléctrica y que puede resultar en un peligro para la integridad de las personas.</p>
              </div>
            </div>
          </div>

          <div className="flip-container">
            <div className="card1">
              <div className="front">
                <p className="pt">CONDICIONES DE SEGURIDAD: RIESGO DE TRÁNSITO</p>
              </div>
              <div class="back">
                <p className="p1">Se pueden establecer como principales factores de riesgos de accidentes de tránsito: Velocidad excesiva, Maniobras de alto riesgo por parte de conductores, Entre los mencionados destacaremos especialmente el consumo de alcohol antes de conducir y al uso de celulares mientras se conduce.</p>
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
                <a href="page11" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page13" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}