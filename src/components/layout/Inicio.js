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
            <h3 class="mt-4">Inicia tu prueba</h3>
            <p></p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="/Login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/registro">
                  Registro
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default inicio;
