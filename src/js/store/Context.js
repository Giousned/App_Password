import React from "react";
import { createContext, useContext, useState } from "react";


const Context = createContext();

export const AppProvider = ({children}) => {

    const [valueContraseña, setValueContraseña] = useState("");
    const [includeMajus, setIncludeMajus] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [contraseñasSaved, setContraseñasSaved] = useState([]);

    
    const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
    const lowerCase = upperCase.map(char => char.toLowerCase());
    const numbers = Array.from({ length: 10 }, (_, i) => i);
    const symbols = ['*', '!', '.', '-', '#', '@']


    const store = {
        valueContraseña,
        includeMajus,
        includeNumbers,
        includeSymbols,
        contraseñasSaved
    };

    const actions = {
        handleCheckMajus: () => setIncludeMajus(!includeMajus),
        handleCheckNumbers: () => setIncludeNumbers(!includeNumbers),
        handleCheckSymbols: () => setIncludeSymbols(!includeSymbols),
        handleValueContraseña: (valorContraseña) => setValueContraseña(valorContraseña),
        generarContraseña: (includeMajus, includeNumbers, includeSymbols, passwordLength = 8) => {
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
        },
        guardarContraseña: (includeMajus, includeNumbers, includeSymbols, valorContraseña) => {

            const arrayContraseña = [...store.contraseñasSaved, valorContraseña];

            setValueContraseña("");
            setIncludeMajus(false);
            setIncludeNumbers(false);
            setIncludeSymbols(false);

            return setContraseñasSaved(arrayContraseña);
        }
    };

    return (   
    <Context.Provider value={{store, actions}}>
        {children}
    </Context.Provider>);
}

const useAppProvider = () => useContext(Context);

export default useAppProvider;

// {
//     includeMajus,
//     includeNumbers,
//     includeSymbols,
//     passwordLength = 8
// }