import React, { Fragment, useState, useContext, useEffect } from "react";
import productoContext from "../../context/productos/productoContext";

const CrearProyecto = () => {
  // Obtener el State del formulario
  const productosContext = useContext(productoContext);
  const {
    formulario,
    errorFormulario,
    mostrarFormulario,
    agregarProducto,
    mostrarError,
    actualizarProducto,
    productoSeleccionado,
  } = productosContext;

  // useEffect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (productoSeleccionado !== null) {
      guardarProducto(productoSeleccionado);
    } else {
      guardarProducto({
        nombre: "",
        cantidad: 0,
        precio: 0,
      });
    }
  }, [productoSeleccionado]);

  // State de Nuevo Proyecto
  const [producto, guardarProducto] = useState({
    nombre: "",
    cantidad: 0,
    precio: 0,
  });

  // Extraer datos del producto
  const { nombre, cantidad, precio } = producto;

  // Leer input
  const onChange = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  // onSubmit prevenir reinicio y enviar el proyecto
  const onSubmitProducto = (e) => {
    e.preventDefault();

    // Validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    // Revisar si el usuario esta editando o esta agreagando un producto
    if (productoSeleccionado === null) {
      // Tarea nueva
      // Agregar la nueva tarea al state de tareas
      agregarProducto(producto);
    } else {
      // Actualizar tarea existente
      actualizarProducto(producto);
      // tareaSeleccionada to null
      // Reiniciar el form
      guardarProducto({
        nombre: "",
        cantidad: 0,
        precio: 0,
      });
    }
  };

  return (
    <Fragment>
      <br />
      {errorFormulario ? (
        <div className="alert alert-danger" role="alert">
          Debes escribir un nombre...
        </div>
      ) : null}
      <br />
      <button
        className="btn btn-primary w-100 authbutton"
        onClick={mostrarFormulario}
      >
        Crea un Producto
      </button>
      {formulario ? (
        <form onSubmit={onSubmitProducto}>
          <br />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del producto"
            className="form-control"
            id="nombre"
            aria-describedby="nombreHelp"
            onChange={onChange}
            value={nombre}
          />
          <br />
          <input
            type="number"
            name="cantidad"
            placeholder="Cantidad"
            className="form-control"
            id="cantidad"
            aria-describedby="nombreHelp"
            onChange={onChange}
            value={cantidad}
          />
          <br />
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            className="form-control"
            id="precio"
            aria-describedby="nombreHelp"
            onChange={onChange}
            value={precio}
          />
          <br />
          <input
            type="submit"
            className="btn btn-primary w-100 authbutton"
            value={productoSeleccionado ? "Editar " : "Agregar "}
          />
        </form>
      ) : null}

      <br />
    </Fragment>
  );
};

export default CrearProyecto;
