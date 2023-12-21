import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(
  //para renderizar y construir el componente que contiene la logica
  document.getElementById('root'),
).render(
  //elemento donde se renderiza la aplicacion
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
