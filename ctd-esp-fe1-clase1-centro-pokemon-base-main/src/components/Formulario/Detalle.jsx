import React from "react";
import  { useContext } from "react";
import { FormularioContext } from "../../context/ContextoFormulario";



const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const {store}=useContext(FormularioContext);


 
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre:{store?.data?.nombre}</p>
          <p>Apellido:{store?.data?.apellido}</p>
          <p>Email:{store?.data?.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{store?.data?.nombrePokemon}</p>
          <p>Tipo Pokemon:{store?.data?.tipoPokemon}</p>
          <p>Elemento:{store?.data?.elementoPokemon}</p>
          <p>Altura:{store?.data?.alturaPokemon}</p>
          <p>Edad:{store?.data?.edadPokemon}</p>
          
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
