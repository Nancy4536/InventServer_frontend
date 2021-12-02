import React from "react";
import img from "../../img/inventario2jpg.jpg";

const Contact = (props) => {
  return (
    <div>
      <div className="container col-sm-8">
        <br />
        <img src={img} alt="" id="imagen" />
        <div className="container p-5 my-5 text-center">
          <p>Cel: +5730012345678</p>
          <p>E-mail: com@InventServer.com</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
