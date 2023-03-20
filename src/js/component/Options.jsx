import React from "react";

import { useState } from "react";

import Checkbox from "./Checkbox.jsx";


const Options = (props) => {
  
  return (
    <div className="container">
      <h1>Selecciona tus opciones</h1>

      <Checkbox label="Incluir Mayúscula" handleCheckMajus={handleCheckMajus} includeMajus={includeMajus} />
      <Checkbox label="Incluir Números"  handleCheckNumbers={handleCheckNumbers} includeNumbers={includeNumbers} />
      <Checkbox label="Incluir Símbolos"  handleCheckSymbols={handleCheckSymbols} includeSymbols={includeSymbols} />
      
      <p placeholder="Contraseña" value={valueContraseña} onChange={()=>setValueContraseña(valueContraseña)} ></p>
      <button type="button" className="btn btn-danger" onClick={()=>generarContraseña({includeMajus, includeNumbers, includeSymbols})} >Generar Contraseña</button>

      {(valueContraseña) ? <h2>Esta es tu contraseña: {valueContraseña}</h2> : null}

    </div>
  );
};
export default Options;
