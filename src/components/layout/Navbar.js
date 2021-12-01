import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/authContext";
import logo from "../../img/InventServ.png";

const Navbar = () => {
  // Extraer los valores de AuthContext.js
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado, cerrarSesion } = authContext;
  const token = localStorage.getItem("token");

  useEffect(() => {
    usuarioAutenticado();

    // eslint-disable-next-line
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a id="brand" className="navbar-brand" href="/">
              InvenServer
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            {token !== null ? (
              <li className="nav-item">
                <a className="nav-link" href="/productos">
                  Productos
                </a>
              </li>
            ) : null}
          </li>
          <li class="nav-item">
            {token !== null ? (
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link "
                  onClick={() => cerrarSesion()}
                >
                  Log Out
                </a>
              </li>
            ) : null}
          </li>
          <li className="nav-item">
            {token == null ? (
              <li className="nav-item">
                <a className="nav-link " href="/registro">
                  Registro
                </a>
              </li>
            ) : null}
          </li>
          <li className="nav-item">
            {token == null ? (
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
            ) : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
