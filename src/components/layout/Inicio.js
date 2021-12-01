import React from "react";
import img from "../../img/InventServ.png";

const inicio = (props) => {
  return (
    <div class="container col-md-4 ppal">
      <br />
      <img src={img} alt="" id="" />
      <br />
      <h2>Quienes somos</h2>
      <br />
      <p>
        Invenser es una apliacion dedicada a llevar el control de inventario, en
        nuestra apliacion podras crear un usuario en el cual puedes agregar
        todos tus productos y las diferentes referencias que tengas, esto con el
        fin de poder controlar el inventario y las diferentes entradas y salidas
        que tiene tu empresa
      </p>
      <p>
        Tendras accesos a nuestra herramienta de gestion de inventario solo
        deberas registrarte en nuestra pagina para utilizar las diferentes
        herramientas que podemos ofrecer.
      </p>
    </div>
  );
};

export default inicio;
