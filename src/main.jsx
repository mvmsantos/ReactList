import React from 'react'
import ReactDOM from 'react-dom'
import './pages/styles/global.css'; /* Não precisa colocar from */
import { Home } from './pages/Home' /* Quando voce busca um arquivo dentro de uma pasta e não identifica ele pega o index da pasta */

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
