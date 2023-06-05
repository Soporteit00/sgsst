import './Page14.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgPage14 from "../../assets/img/Page16/copasst.jpg"

export function Page14() {
  return (
    <>
      <div className="container" id='page14'>
        <div className="row justify-content-center">
        <div className="col-6">
          <img src={imgPage14} alt="" className="copasst animate__animated animate__zoomIn" />
          </div>
        <div className="col-6">
          <h2 className='animate__animated animate__zoomIn'>COPASST.</h2>
          <img
            src={imgPage1}
            alt=""  width="600" height="75" className='animate__animated animate__zoomIn'/>
            
          <p className='pg animate__animated animate__zoomIn'>El Comité Paritario de Seguridad y Salud en el Trabajo constituye un medio importante para promocionar la Seguridad y Salud en todos los niveles, busca acuerdos con las directivas y responsables del sistema en función del logro de metas y objetivos concretos, divulgar y sustentar prácticas saludables y motivar la adquisición de hábitos seguros. </p>
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
                <a href="page13" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page15" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}