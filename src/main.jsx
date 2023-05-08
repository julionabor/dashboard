import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BalanceProvider from "./components/context/BalanceProvider"

import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BalanceProvider>
    
      <App />
    
  </BalanceProvider>
  
)
