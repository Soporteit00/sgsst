import "./Page24.css";
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage1 from "../../assets/img/Page1/barra.png"

export function Page24() {
  return (
    <>
      <div className="container" id="page26">
        <div className="row">
          <div className="col-m-12">
            <h2 className="animate__animated animate__fadeInUp">ACCIDENTE DE TRABAJO.</h2>
            <img
            src={imgPage1}
            alt=""  width="1110" height="75" className='animate__animated animate__zoomIn'/>
            <p className="pg  animate__animated animate__fadeInUp">
              Todo suceso repentino que sobrevenga por causa o con ocasión del
              trabajo, y que produzca en el trabajador una lesión orgánica,
              una perturbación funcional o psiquiátrica, una invalidez o
              la muerte. También es AT el que se produce durante la ejecución de
              órdenes del empleador o contratante durante la ejecución de una
              labor bajo su autoridad aun fuera del lugar y hora de trabajo.
              Igualmente se considera AT el que se produzca durante el traslado
              de los trabajadores desde su residencia a los lugares de trabajo y
              viceversa, cuando el transporte lo suministre el empleador. En
              función sindical, siempre y cuando se produzca en cumplimiento de
              dicha función. Actividades recreativas, deportivas o culturales,
              cuando se actué por cuenta o en representación del empleador. Art.
              3, Ley 1562 de 2012.
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
                <a href="page23" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page25" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
