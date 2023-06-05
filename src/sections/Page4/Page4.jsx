import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"

export function Page4(){
    return(
        <>
        <div className="container" id="page4">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <h2>OBJETIVOS DEL CURSO.</h2>
                    <img
            src={imgPage1}
            alt=""  width="1100" height="75" className='animate__animated animate__zoomIn'/>
                    <li>Dar a conocer a todo el personal los conceptos básicos en materia de riesgos laborales.</li> 
                    <li>Lograr que el trabajador identifique y conozca las Políticas de la compañía, como parte esencial de los procesos.</li> 
                    <li> Presentar las obligaciones y derechos del trabajador en temas de SST y en general respecto a la empresa.</li>
                </div>
                </div>
            </div>

            <footer>
        <div className="container">
          <div className="row">
          <nav className="navbar footer ">
            <div className="container-fluid">
              <div className="">
                <a className="tf" href="#">
                  <img
                    src={imgFooter}
                    alt="Logo"
                    width="80"
                    height="75"
                  />amar
                </a>
              </div>
              <a href="page3" className="btn1 bi bi-arrow-left-circle"></a>
              <a href="page5" className="btn bi bi-arrow-right-circle "></a>

            </div>
          </nav>
          </div>
        </div>
      </footer>
            </>    
    )
}