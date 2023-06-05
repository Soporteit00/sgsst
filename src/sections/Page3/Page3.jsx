import './Page3.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgPage3 from "../../assets/img/Page3/sgsst.png"
export function Page3() {
  return (
    <>
      <div className="container" id='page3'>
        <div className="row justify-content-center">
          <div className="col-6">
            <h2>POLÍTICA DE SGSST</h2>
            <h3>LA ASOCIACIÓN MUTUAL AMIGO REAL - AMAR</h3>
            <img
            src={imgPage1}
            alt=""  width="600" height="75" className='animate__animated animate__zoomIn'/>
            <p>
              Establece dentro de sus prioridades el compromiso de planear,
              organizar,ejecutar y evaluar la implementacion y el desarrollo del
              Sistema de Gestión de la Seguridad y Salud en el trabajo y
              programas de promoción y prevensión con el acompañamiento directo
              de la gerencia.
            </p>
          </div>
          <div className="col-6">
            <img align="right" src={imgPage3} alt="" className="sst animate__animated animate__flipInY"/> 
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
                  />amar
                </a>
              </div>
              <a href="page2" className="btn1 bi bi-arrow-left-circle"></a>
              <a href="page4" className="btn bi bi-arrow-right-circle "></a>

            </div>
          </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
