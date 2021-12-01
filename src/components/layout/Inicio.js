import react from "react";
import img from "../../img/InventServ.png";

const inicio = (props) => {
  return (
    <div className="container col-md-4 ppal">
      <br />
      <img src={img} alt="" id="imagen" />
      <br />
      <br />
      <div class="ui vertical stripe segment">
        <div class="ui middle aligned stackable grid container">
          <div class="row">
            <div class="eight wide column">
              <h2 class="ui header">Quienes somos</h2>
              <p>
                Invenser es una apliacion dedicada a llevar el control de
                inventario, en nuestra apliacion podras crear un usuario en el
                cual puedes agregar todos tus productos y las diferentes
                referencias que tengas, esto con el fin de poder controlar el
                inventario y las diferentes entradas y salidas que tiene tu
                empresa
              </p>
              <p>
                Tendras accesos a nuestra herramienta de gestion de inventario
                solo deberas registrarte en nuestra pagina para utilizar las
                diferentes herramientas que podemos ofrecer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default inicio;
