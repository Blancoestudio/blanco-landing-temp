import { Link } from "react-router-dom"

export const ContactPage = () => {
  return (
    <div className="main animate__animated animate__fadeIn">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col text-center">
            
            <img src="./assets/images/blanco.png" className="mb-3" alt="Blanco" />
            <div><a href="mailto:info@blanco-brand.com" className="text-decoration-none text-black">info@blanco-brand.com</a></div>
            <Link to={"/"}>Volver</Link>

          </div>
        </div>
      </div>
    </div>
  )
}
