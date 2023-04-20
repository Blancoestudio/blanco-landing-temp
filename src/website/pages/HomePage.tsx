import Typed from 'typed.js';
import logo from "../../../assets/blanco.png";
import { useEffect, useRef } from 'react';

export const HomePage = () => {

  const el = useRef(null);
  const typed = useRef<any>(null);

  useEffect(() => {
    const options = {
      strings: ['Fusionamos tecnología y creatividad para transformar el mundo'],
      typeSpeed: 25,
      backSpeed: 50,
      cursorChar: '_',
      startDelay: 750,
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="main bg-black text-white animate__animated animate__fadeIn">

      <div className="container h-100">
        <div className="row h-100">
          <div className="col h-100">
            
            <div className="h-100 d-flex flex-column justify-content-between text-center">
              <div></div>

              <div>
                <img src={logo} width="80" className="mb-3" alt="Blanco" />
                <h1 className="display-3 fw-light text-uppercase ">Blanco - Brand</h1>
                <span style={{ letterSpacing: '.4em', fontSize: '12px' }} className="fw-light" ref={el}></span>
                <hr style={{ width: '100px', margin: '3em auto 2em', borderWidth: '2px' }} />
                <div className="d-flex justify-content-center align-items-center">
                  <a href="mailto:info@blanco-brand.com" className="btn btn-circle btn-lg">
                    <i className="bi bi-envelope"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/estudio-blanco/" target="_blank" className="btn btn-circle btn-lg">
                    <i className="bi bi-linkedin"></i>
                  </a>
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
