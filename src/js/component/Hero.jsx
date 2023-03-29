import React from "react";

const Hero = (props) => {

  return (
    <div className=" mb-5 p-3 info">

      <h1>{props.title}</h1>

      <p>{props.subtitle}</p>

      <p>¡Genera tus contraseñas seguras en cuestión de segundos!</p>
      
    </div>
  );
};
export default Hero;
