import React from 'react'
import ReactDOM from 'react-dom/client'
import { IpContext } from "./context/ipContext"
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <IpContext>
    <App />
  </IpContext>
)
