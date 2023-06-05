import "./Page8.css";
import imgFooter from "../../assets/img/Footer/n-8.png"

export function Page8() {

  return (
    <>
      <div className="container" id="page7">
        <div className="row justify-content-center">
          <div className="col">
          <div className="card8 animate__animated animate__bounce">
            <h2>OBLIGACIONES DEL EMPLEADO.</h2>
            <p> Utilizar y cuidar los EPP.</p>
            <p> Informar sobre los daños o averías de los EPP.</p>
            <p>Informar sus condiciones de salud.</p>
            <p>Informar sobre los riegos de su puesto de trabajo.</p>
            <p>Reporte de accidentes laborales.</p>
           <p>Condiciones o actos inseguros.</p> 
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
                <a href="page7" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page9" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
