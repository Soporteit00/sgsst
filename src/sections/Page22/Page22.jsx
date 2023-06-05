import "./Page22.css";
import Swal from 'sweetalert2'
import imgFooter from "../../assets/img/Footer/n-8.png"
import imgSeguridad from "../../assets/img/Page24/seguridad.jpg"
import imgAccidente from "../../assets/img/Page24/accidente.jpg"
import imgEnfermedad from "../../assets/img/Page24/enfermedad.jpg"
import imgEnfermedadC from "../../assets/img/Page24/enfermedac.jpg"

export function Page22() {


//     // referencia a todas las tarjetas
// const tarjetas = document.getElementById('cardM');

// // para indicar si se ha pasado el cursor por las tarjetas
// let cursorTarjetas = false;

// // Agrega un listener de evento a cada tarjeta

//   tarjetas.addEventListener('mouseover', () => {
//     cursorTarjetas = true;
//   });
//   tarjetas.addEventListener('mouseout', () => {
//     cursorTarjetas = false;
//   });



// // evento al enlace "Avanzar" en el footer
// const avanzar = document.getElementById('Avanzar');
// avanzar.addEventListener('click', event => {
//   if (!cursorTarjetas) {
//     event.preventDefault(); // Evita que se avance a la siguiente página
//     Swal.fire({
//       title: 'Debes pasar el cursor por las tarjetas antes de avanzar.',
//       showClass: {
//         popup: 'animate__animated animate__fadeInDown'
//       },
//       hideClass: {
//         popup: 'animate__animated animate__fadeOutUp'
//       }
//     })
//   }
// });



// //referencia a todas las tarjetas
// const tarjetas = document.querySelectorAll('.cardM');

// //  para indicar si se ha pasado el cursor por las tarjetas
// let cursorTarjetas = false;

// // Agrega un listener de evento a cada tarjeta
// tarjetas.forEach(tarjetas => {
//   tarjetas.addEventListener('mouseover', () => {
//     cursorTarjetas = true;
//   });
//   tarjetas.addEventListener('mouseout', () => {
//     cursorTarjetas = false;
//   });
// });

// // Agrega un listener de evento al botón de avanzar
// const btnAvanzar = document.getElementById('Avanzar');
// btnAvanzar.addEventListener('click', event => {
//   if (!cursorTarjetas) {
//     event.preventDefault(); // Evita que se avance a la siguiente página
//     console.log('Debes pasar el cursor por las tarjetas antes de avanzar.');
//   }
// });



  Swal.fire({
    title: 'Pasa el mouse para leer la información de las tarjetas.',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  return (


    <>
      <div className="container" id="page22">
        <div className="row justify-content-start">
          <div className="col-6">
            <div className="body">
              <div className="cardM">
                <picture className="imgBox">
                  <img src={imgSeguridad} alt="" />
                  <img src={imgAccidente} alt="" />
                </picture>
                <div className="details">
                  <div className="content2">
                    <h2 className="text-center">SEGURIDAD SOCIAL</h2>
                    <p className="text-center">
                      -EPS: Entidad Prestadora de salud. <br />
                      -ARL: Administradora de <br />
                      riesgos laborales. <br />
                      -FONDO DE PENSIÓN: <br />
                      -CAJA DE COMPENSACIÓN. <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="body">
              <div className="cardM">
                <picture className="imgBox">
                  <img
                    src={imgEnfermedad}
                    alt=""
                  />
                  <img
                    src={imgEnfermedadC}
                    alt=""
                  />
                </picture>
                <div className="details">
                  <div className="content2">
                    <h2 className="text-center">ENFERMEDAD COMÚN.</h2>
                    <p className="text-center">
                      Se denomina enfermedad al proceso y a la fase que
                      atraviesan los seres vivos cuando padecen una afección que
                      atenta contra su bienestar al modificar su condición
                      ontológica de salud.
                    </p>
                  </div>
                </div>
              </div>
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
                <a href="page21" className="btn1 bi bi-arrow-left-circle"></a>
                <a href="page23" id="Avanzar" className="btn bi bi-arrow-right-circle "></a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
