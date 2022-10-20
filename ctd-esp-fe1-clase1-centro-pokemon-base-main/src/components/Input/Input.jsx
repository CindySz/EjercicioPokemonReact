import React, { useContext, useState } from "react";
import { FormularioContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  const { store, dispatch}=useContext(FormularioContext);

  // También, utilizaremos un estado local para manejar el estado del input.

  const [info, setInfo]= useState("");

  const pokemon= name.slice(-7)

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.

    
    setInfo(e.target.value)
   
   
  };


  const onBlur = (e) => {
    console.log({[e.target.name]: e.target.value});
    
    e.preventDefault();
    // setDisplay({
    //   ...display,
    //   [name]: info
    // })

    const type= pokemon==="Pokemon"?"ACTUALIZAR_POKEMON":"ACTUALIZAR_ENTRENADOR"



    dispatch(
      {type:type, payload:{...store?.data, [e.target.name]: e.target.value} })

  };

  


  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={info}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
