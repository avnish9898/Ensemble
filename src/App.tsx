import { useState } from 'react'
import './App.css'
import Ensemble from './Pages/Ensemble'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <EnsemblePage/>
    <Ensemble/>
      
  )
}

export default App
