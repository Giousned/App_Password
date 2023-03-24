import React from "react";
import { createContext, useContext, useState } from "react";


const Context = createContext();

export const AppProvider = ({children}) => {
    const [valueContraseña, setValueContraseña] = useState("");
    const [includeMajus, setIncludeMajus] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [contraseñasSaved, setContraseñasSaved] = useState([]);
    const [slider, setSlider] = useState(8);

    
    const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
    const lowerCase = upperCase.map(char => char.toLowerCase());
    const numbers = Array.from({ length: 10 }, (_, i) => i);
    const symbols = ['*', '!', '.', '-', '#', '@']


    const store = {
        valueContraseña,
        includeMajus,
        includeNumbers,
        includeSymbols,
        contraseñasSaved,
        slider
    };

    const actions = {
        handleCheckMajus: () => setIncludeMajus(!includeMajus),
        handleCheckNumbers: () => setIncludeNumbers(!includeNumbers),
        handleCheckSymbols: () => setIncludeSymbols(!includeSymbols),
        handleValueContraseña: (valorContraseña) => setValueContraseña(valorContraseña),
        handleChangeSlider: (valor) => setSlider(valor),
        generarContraseña: (includeMajus, includeNumbers, includeSymbols) => {

            const includedSets = [lowerCase];
            if (includeMajus) includedSets.push(upperCase);
            if (includeNumbers) includedSets.push(numbers);
            if (includeSymbols) includedSets.push(symbols);
    
            const passwordArray = [];
    
            for (let i = store.slider; i > 0; i--) {
                const randomSet = Math.floor(Math.random() * includedSets.length);
                const randomChar = Math.floor(Math.random() * includedSets[randomSet].length);                
    
                passwordArray.push(includedSets[randomSet][randomChar]);
            };
    
        return setValueContraseña(passwordArray.join(''));
        },
        guardarContraseña: (valorContraseña) => {

            const arrayContraseña = [...store.contraseñasSaved, valorContraseña];

            setValueContraseña("");
            setIncludeMajus(false);
            setIncludeNumbers(false);
            setIncludeSymbols(false);

            return setContraseñasSaved(arrayContraseña);
        },
        borrarContraseña: (passItem) => {

            const newArray = store.contraseñasSaved.filter((item) => item != passItem);

            setContraseñasSaved(newArray);
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