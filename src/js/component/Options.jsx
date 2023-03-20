import React from "react";

import { useState } from "react";

import Checkbox from "./Checkbox.jsx";


const Options = (props) => {
  const [valueContraseña, setValueContraseña] = useState("");
  const [includeMajus, setIncludeMajus] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);


  const handleCheckMajus = () => { setIncludeMajus(!includeMajus);}
  const handleCheckNumbers = () => { setIncludeNumbers(!includeNumbers);}
  const handleCheckSymbols = () => { setIncludeSymbols(!includeSymbols);}

  
  const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
  const lowerCase = upperCase.map(char => char.toLowerCase());
  const numbers = Array.from({ length: 10 }, (_, i) => i);
  const symbols = ['*', '!', '.', '-', '#', '@']


  const generarContraseña = ({
          includeMajus,
          includeNumbers,
          includeSymbols,
          passwordLength = 8
      }) => {
        const includedSets = [lowerCase];
        if (includeMajus) includedSets.push(upperCase);
        if (includeNumbers) includedSets.push(numbers);
        if (includeSymbols) includedSets.push(symbols);

        const passwordArray = [];

        for (let i = passwordLength; i > 0; i--) {
            const randomSet = Math.floor(Math.random() * includedSets.length);
            const randomChar = Math.floor(Math.random() * includedSets[randomSet].length);

            passwordArray.push(includedSets[randomSet][randomChar]);
        };

    return setValueContraseña(passwordArray.join(''));
}

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
