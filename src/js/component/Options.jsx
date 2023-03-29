import React from "react";

import Checkbox from "./Checkbox.jsx";

import useAppProvider from "../store/Context.js";
import Contraseña from "./Contraseña.jsx";


const Options = () => {

  const {store, actions} = useAppProvider();
  
  return (
    <div>
      <h1>Selecciona tus opciones</h1>

      <div className="d-block">

          <Checkbox label="Incluir Mayúscula" handleClick={actions.handleCheckMajus} valor={store.includeMajus} />
          <Checkbox label="Incluir Números"  handleClick={actions.handleCheckNumbers} valor={store.includeNumbers} />
          <Checkbox label="Incluir Símbolos"  handleClick={actions.handleCheckSymbols} valor={store.includeSymbols} />
          
          <p placeholder="Contraseña" value={store.valueContraseña} onChange={() => actions.handleValueContraseña(store.valueContraseña)} ></p>
          <button type="button" className="btn btn-danger" onClick={() => actions.generarContraseña(store.includeMajus, store.includeNumbers, store.includeSymbols)} >Generar Contraseña</button>

          {(store.valueContraseña) ? <Contraseña /> : null}

      </div>

    </div>
  );
};
export default Options;
