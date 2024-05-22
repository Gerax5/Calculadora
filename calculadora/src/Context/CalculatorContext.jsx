import { createContext } from 'react';
import PropTypes from 'prop-types'

const MiContexto = createContext();

const CalculatorContext = ({children}) => {
    const contextValue = ''
    return (
        <MiContexto.Provider value={contextValue}>
            {children}
        </MiContexto.Provider>
    )
}

CalculatorContext.propTypes = {
    children: PropTypes.any
}

export default CalculatorContext