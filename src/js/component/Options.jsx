import React from "react";
import { useState } from "react";
import Checkbox from "./Checkbox.jsx";


const Options = (props) => {
  const [valueContraseña, setValueContraseña] = useState("");

  return (
    <div>
      <h1>Selecciona tus opciones</h1>
      <Checkbox label="Incluir Mayúscula"  initiallyChecked="false"/>
      <Checkbox label="Incluir Números"  initiallyChecked="false"/>
      <Checkbox label="Incluir Símbolos"  initiallyChecked="false"/>
      <h2>Esta es tu contraseña:</h2>
      <p placeholder="Contraseña" value={valueContraseña} onChange={()=>setValueContraseña(valueContraseña)} ></p>
    </div>
  );
};
export default Options;
