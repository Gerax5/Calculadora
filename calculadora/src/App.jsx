import Calculator from './Page/Calculator'
import CalculatorContext from './Context/CalculatorContext'
import './App.css'

function App() {
  return (
    <CalculatorContext>
      <Calculator></Calculator>
    </CalculatorContext>
  )
}

export default App
