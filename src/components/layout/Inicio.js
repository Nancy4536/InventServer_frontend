import React from "react";
import img from "../../img/inventario.jpg";

const inicio = (props) => {
  return (
    <div>
      <div class="p-5 bg-primary text-white text-center">
        <h1>InventServer</h1>
        <p>Lleva tus productos a otro nivel</p>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-4">
            <h2>Contactenos</h2>
            <p>puedes comunicarte a nuestros lineas de servicio</p>
            <p>cel:+573001234567 email:</p>
            <p>email:recursos@inventser.com</p>
            <h3 class="mt-4">Some Links</h3>
            <p></p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-8">
            <h2>Quienes Somos</h2>
            <img src={img} alt="" />
            <br />
            <br />
            <p>
              InvenServ es una aplicacion web dedicada al manejor de inventario,
              podra llevar el manejo de sus productos a otro nivel, tener un
              control de stock de ventas y saber con que productos cuenta en su
              compañia
            </p>

            <h2 class="mt-5">TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2020</h5>
            <div class="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default inicio;
