import "./Page26.css";
import Swal from 'sweetalert2'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgCondicion from "../../assets/img/Pagina28/condicioninse.jpg"
import imgActo from "../../assets/img/Pagina28/acto.jpg"

export function Page26() {

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
      <div className="container" id="page26">
        <div className="col-md-12 text-center">
          <div className="box animate__animated animate__zoomIn">
            <div className="card4  ">
              <div className="imgBx">
                <img src={imgCondicion} alt="" />
              </div>
              <div className="details1">
                <p  className="pc">Es todo elemento de los equipos, la materia prima, las herramientas, las máquinas, las instalaciones o el medio ambiente que se convierte en un peligro para las personas.</p>
              </div>
              <h2>CONDICIÓN INSEGURA.</h2>
            </div>
            <div className="card4 ">
              <div className="imgBx ">
                <img src={imgActo} alt="" />
              </div>
              <div className="details1">
                <p className="pc">Se define como acto inseguro a las omisiones, acciones o comportamientos del trabajador que provocan riesgos contra su seguridad y la del resto de los colaboradores.</p>
              </div>
              <h2>ACTO INSEGURO.</h2>
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
                <a href="page25" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page27" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
