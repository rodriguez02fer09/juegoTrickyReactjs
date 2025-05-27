// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider as ReduxProvider} from 'react-redux'
import {store} from './redux/store'
import {TrickyProvider} from './Context/index.jsx' // ajusta la ruta

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <TrickyProvider>
        <App />
      </TrickyProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
