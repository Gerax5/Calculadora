import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calculator from './Page/Calculator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Calculator></Calculator>
  )
}

export default App
