import './Page16.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"

export function Page16(){
    return (
        <>
          <div className="container" id='page16'>
            <div className="row justify-content-center">
            <div className="col-m-12 ">
              <h2 className='animate__animated animate__zoomIn'>FUNCIONES DEL COPASST.</h2>
              <img
            src={imgPage1}
            alt=""  width="1110" height="75" className='animate__animated animate__zoomIn'/>
              <p className='animate__animated animate__zoomIn'>
                <li>Vigilar el desarrollo de las actividades en seguridad y salud en el trabajo, promover su divulgación y observancia.</li>
                <li>Servir como organismo de coordinación entre empleador y los trabajadores en la solución de los problemas relativos a la salud ocupacional. Tramitar los reclamos de los trabajadores relacionados con la salud ocupacional.</li>
                <li>Visitar periódicamente los lugares de trabajo e inspeccionar los ambientes, máquinas, equipos, aparatos y las operaciones realizadas por el personal de trabajadores en cada área o sección de la empresa e informar al empleador sobre la existencia de factores de riesgo y sugerir las medidas correctivas y de control.</li>
                <li>Colaborar en el análisis de las causas de los accidentes de trabajo y enfermedades laborales, proponer al empleador las medidas correctivas que haya lugar para evitar su ocurrencia.</li>
                </p>
          </div>
          {/* <div className="col-6"> */}
          {/* <img src="../../src/assets/img/Page18/funciones.png" alt="" className="funciones animate__animated animate__zoomIn" />
          </div> */}
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
                <a href="page15" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page17" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
        </>
      );
}