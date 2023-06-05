import './Page15.css'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgPage15 from "../../assets/img/Page17/copasst1.png"

export function Page15() {
  return (
    <>
      <div className="container" id='page15'>
        <div className="row justify-content-center">



          <img src={imgPage15} alt="" className="copasst1 animate__animated animate__zoomIn" />
 
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
                <a href="page14" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page16" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}