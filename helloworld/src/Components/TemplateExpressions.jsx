import React from 'react'
import MyComponent from './MyComponent'
 
const TemplateExpressions = () => {
  const name = "Juan"
  const data = {
    age: 17,
    hobbie: "programar"
  }
 
  return (
    <>
      <h1>Oi, {name}</h1>
      <p>Você tem: {data.age} anos</p>
      <p>Seu hobbie é: {data.hobbie}</p>
      <hr />
      10 + 10 = {10 + 10}
      <hr />
      {"Hello Word"}
      <hr />
      <MyComponent />
    </>
  )
}
 
export default TemplateExpressions