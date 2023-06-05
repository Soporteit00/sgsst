import './Page18.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"

export function Page18(){
    return(
        <>
        <div className="container" id='page18'>
            <div className="row">
                <div className="comit col-m-12">
                    <h2 className="animate__animated animate__fadeInUp">FUNCIONES DEL COMITÉ.</h2>
                    <img
            src={imgPage1}
            alt=""  width="1110" height="75" className='animate__animated animate__zoomIn'/>
                    <p className='animate__animated animate__fadeInUp'>
                    <li>Recibir y dar trámite a quejas con pruebas que las soportan.</li>
                    <li>Examinar confidencialmente los casos.</li>
                    <li>Escuchar las partes involucradas individualmente.</li>
                    <li>Concertar reuniones y espacios de dialogo entre las partes generando compromisos y soluciones efectivas.</li>
                    <li>Formular un plan de mejora entre las partes.</li>
                    </p>
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
                <a href="page17" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page19" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
        </>
    )
}