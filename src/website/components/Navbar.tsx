import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-transparent">
      <div className="container-fluid d-flex justify-content-center">
        {/* <span className="navbar-text">Contacto</span> */}
        <NavLink to={"/contact"} className="navbar-text text-decoration-none">Contacto</NavLink>
      </div>
    </nav>
  );
};
