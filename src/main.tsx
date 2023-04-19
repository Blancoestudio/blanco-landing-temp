import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BlancoApp } from './BlancoApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */} <BlancoApp />
    </BrowserRouter>
  </React.StrictMode>,
)
