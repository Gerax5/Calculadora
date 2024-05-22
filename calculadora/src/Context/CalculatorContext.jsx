import { createContext, useContext } from 'react';

const MiContexto = createContext();

const CalculatorContext = ({children}) => {
    const contextValue = ''
    return (
        <MiContexto.Provider value={contextValue}>
            {children}
        </MiContexto.Provider>
    )
}

export default CalculatorContext