import './Page17.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgPage17 from "../../assets/img/Page19/comite.png"

export function Page17() {
  return (
    <>
      <div className="container" id='page17'>
        <div className="row justify-content-center">
        <div className="col-6">
          <img src={imgPage17} alt="" className="comite animate__animated animate__zoomIn" />
          </div>
        <div className="col-6">
          <h2 className='animate__animated animate__zoomIn'>¿QUE ES EL COMITÉ DE CONVIVENCIA LABORAL?</h2>
          <img
            src={imgPage1}
            alt=""  width="600" height="75" className='animate__animated animate__zoomIn'/>
          <p className='pl animate__animated animate__zoomIn'>Es un organismo asesor conformado por un numero igual de representantes del empleador y de los trabajadores con sus respectivos suplentes, cuya principal función es la de establecer estrategias de conciliación entre las partes cuando exista una queja de acoso laboral; de igual forma el promover actividades preventivas  de acoso laboral para proteger a los trabajadores contra los riesgos psicosociales que afecten su salud en los lugares de trabajo</p>
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
                <a href="page16" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page18" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}