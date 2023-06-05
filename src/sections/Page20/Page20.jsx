import './Page20.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"

export function Page20(){
    return(
        <>
        <div className="container" id='page20'>
            <div className="row">
                <div className="col-m-12">
                    <h2 className="animate__animated animate__fadeInUp">PLAN DE EMERGENCIA.</h2>
                    <img
            src={imgPage1}
            alt=""  width="1110" height="75" className='animate__animated animate__zoomIn'/>
                    <p className='pg animate__animated animate__fadeInUp'>
                    Una emergencia puede presentarse en cualquier momento. Por eso, es tan importante estar preparados para afrontar estas situaciones, en la empresa  se está trabajando en el plan de preparación para aquellos eventos que ponen en riesgo la vida humana y los bienes, en él se integra un conjunto de acciones que permiten reducir la posibilidad de ser afectados si se presenta la emergencia.
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
                <a href="page19" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page21" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
        </>
    )
}