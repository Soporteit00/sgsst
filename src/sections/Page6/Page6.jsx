import './Page6.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"

export function Page6(){

    return(
        <>
        <div className="container" id='page6'>
            <div className="row justify-content-center">
            <div className="col-md-12">
                    <h2>SISTEMA DE GESTIÓN DE LA SEGURIDAD Y SALUD EN EL TRABAJO.</h2>
                    <img
            src={imgPage1}
            alt=""  width="1100" height="75" className='animate__animated animate__zoomIn'/>
                    <h4>Art 1, Ley 1562 de 2012.</h4>
                    <p>consiste en el desarrollo de un proceso lógico y por etapas, basado en la mejora continua y que incluye la política, la organización,la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora con el objetivo de anticipar, reconocer, evaluar y controlar los riegos que puedan afectar la seguridady salud en el trabajo.</p>
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
                  />amar
                </a>
              </div>
              <a href="page5" className="btn1 bi bi-arrow-left-circle"></a>
              <a href="page7" className="btn bi bi-arrow-right-circle "></a>

            </div>
          </nav>
          </div>
        </div>
      </footer>
        </>
    )
}