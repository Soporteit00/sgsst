import "./Page9.css";
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"

export function Page9() {
  return (
    <>
      <div className="container" id="page9"> 
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h2 className="animate__animated animate__zoomIn">
              REGLAMENTO DE HIGIENE Y SEGURIDAD INDUSTRIAL.
            </h2>
            <img
              src={imgPage1}
              alt=""
              width="1110"
              height="75"
              className="animate__animated animate__zoomIn"
            />
            <p className="animate__animated animate__zoomIn">
              AMAR y sus trabajadores darán estricto cumplimientoa las
              disposiciones legales, así como las normas técnicas e internas que
              se adopten para la implantación de las actividades de medicina
              preventiva y del trabajo, Higiene y Seguridad Industrial, que sean
              concordantes con el presente Reglamento y con el programa de SST.
            </p>

            <p className="animate__animated animate__zoomIn">
              Está exhibido en las carteras o bolsillos de las agencias y cuyos
              contenidos se dan a conocer a todos los trabajadores en el momento
              de su ingreso.
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
                <a href="page8" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page10" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
