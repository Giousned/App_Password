import React from "react";

import useAppProvider from "../store/Context";

import { useNavigate } from "react-router";

const Contraseña = () => {
  const navigate = useNavigate();

  const { store, actions } = useAppProvider();

  return (
    <div className="mt-3">
      <h2>Esta es tu contraseña: {store.valueContraseña}</h2>
      <button
        type="button"
        className="btn btn-success mt-1"
        onClick={() => {
          actions.guardarContraseña(
            store.includeMajus,
            store.includeNumbers,
            store.includeSymbols,
            store.valueContraseña
          );
          navigate("/my-passwords");
        }}
      >
        Guardar Contraseña
      </button>
    </div>
  );
};

export default Contraseña;
