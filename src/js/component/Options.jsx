import React from "react";

import Checkbox from "./Checkbox.jsx";

import useAppProvider from "../store/Context.js";


const Options = () => {

  const {store, actions} = useAppProvider();
  
  return (
    <div className="container">
      <h1>Selecciona tus opciones</h1>

      <Checkbox label="Incluir Mayúscula" handleCheckMajus={actions.handleCheckMajus} includeMajus={store.includeMajus} />
      <Checkbox label="Incluir Números"  handleCheckNumbers={actions.handleCheckNumbers} includeNumbers={store.includeNumbers} />
      <Checkbox label="Incluir Símbolos"  handleCheckSymbols={actions.handleCheckSymbols} includeSymbols={store.includeSymbols} />
      
      <p placeholder="Contraseña" value={store.valueContraseña} onChange={() => actions.handleValueContraseña(store.valueContraseña)} ></p>
      <button type="button" className="btn btn-danger" onClick={() => actions.generarContraseña(store.includeMajus, store.includeNumbers, store.includeSymbols)} >Generar Contraseña</button>

      {(store.valueContraseña) ? <h2>Esta es tu contraseña: {store.valueContraseña}</h2> : null}

    </div>
  );
};
export default Options;
