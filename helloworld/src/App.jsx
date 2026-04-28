import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FirstComponents from './components/FirstComponents'
import MyComponent from './Components/MyComponent'
import TemplateExpressions from './Components/TemplateExpressions'
import Event from './Components/Event'
import CalculadoraIMC from './Components/CalculadoraIMC'
 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <MyComponent />
      <FirstComponents />
      <TemplateExpressions />
      <Event />
      <CalculadoraIMC />

    </>
  )
}
 
export default App