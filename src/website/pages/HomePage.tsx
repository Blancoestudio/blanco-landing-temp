import { Link } from 'react-router-dom';
import Typed from 'typed.js';

export const HomePage = () => {
  return (
    <div className="main bg-black text-white animate__animated animate__fadeIn">

      <div className="container h-100">
        {/* <div className="row h-100 align-items-center justify-content-center"> */}
        <div className="row h-100">
          <div className="col h-100">
            
            <div className="h-100 d-flex flex-column justify-content-between text-center">
              <div></div>

              <div>
                <img src="./assets/images/blanco.png" width="80" className="mb-3" alt="Blanco" />
                <h1 className="display-2 fw-light">Blanco - Brand</h1>
                <p style={{ letterSpacing: '.4em', fontSize: '12px' }} className="fw-light">Fusionamos tecnología y creatividad para transformar el mundo</p>
                <hr style={{ width: '150px', margin: '3em auto 2em' }} />
                <div className="d-flex justify-content-center">
                  <Link className="btn btn-circle btn-lg text-secondary" to={'/'}>
                    <i className="bi bi-envelope"></i>
                  </Link>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center gap-3 mb-4 animate__animated animate__delay-1s animate__fadeInUp">
                <p className="mb-0 text-secondary"><small>Lanzaremos nuestro nuevo sitio web!</small></p>
                <button type="button" className="btn btn-outline-warning btn-sm mb-0 px-3"  disabled>
                  <small>Mayo 18, 2023</small>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}
