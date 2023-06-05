import "./Page1.css";
import 'animate.css'
import imgPage1 from "../../assets/img/Page1/barra.png"
import imgFooter from "../../assets/img/Footer/n-8.png"
import Cuaderno from "../../assets/img/Page1/cuaderno.png"
export function Page1() {
  return (
    <>
      <div className="container" id="page1">
        <div className="row justify-content-center">
          <div className="col-m-12">
          <h2 className='animate__animated animate__zoomIn'>ANTES DE INICIAR...</h2>
          <img
            src={imgPage1}
            alt=""  width="1100" height="75" className='animate__animated animate__zoomIn'/>
          <h3 className='hp1 animate__animated animate__zoomIn'>
            Para la realización del curso, ten en cuenta las siguientes
            recomendaciones:
          </h3>
          <p  className='animate__animated animate__zoomIn'>
          <li>Guarda todo lo que pueda distraerte.</li>
          <li>Apaga tu celular o ponlo en silencio.</li>
          <li>Ten a la mano lápiz y un cuaderno donde puedas tomar nota.</li>
          </p>
          <div align="center"> <img src={Cuaderno} alt=""
           className="logo2 animate__animated animate__zoomIn"/></div>
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
              <a href="/" className="btn1 bi bi-arrow-left-circle"></a>
              <a href="page2" className="btn bi bi-arrow-right-circle "></a>

            </div>
          </nav>
          </div>
        </div>
      </footer>
</>
  );
}
