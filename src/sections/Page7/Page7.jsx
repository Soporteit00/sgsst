import "./Page7.css";
import imgFooter from "../../assets/img/Footer/n-8.png"

export function Page7() {

  
  return (
  <>
      <div className="container" id="page7">
      <div className="row justify-content-center">
          <div className="col">
          <div className="card7 animate__animated animate__bounce">
            <h2>OBLIGACIONES DEL EMPLEADOR.</h2>
            <p> Establecer y mantener un programa de EPP</p>
            <p> Selección y suministro de EPP según los riesgos</p>
            <p>Velar por el uso y mantenimiento de los EPP</p>
            <p>Investigar las causas de mal funcionamiento de los EPP y reemplazarlos cuando sea necesario.</p>
            <p>Capacitar a los trabajadores en el uso de los EPP.</p>
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
                <a href="page6" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page8" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
      </>
  );
}
