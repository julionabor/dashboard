import React, { useState, createContext, useReducer } from 'react'
import NewReceipt from './NewReceipt'


export const BalanceContext = createContext({})

const BalanceProvider = (props) => {
  const [receipts , setReceipts] = useState({
    ordenadoMedio: 0,
    subsidio: 0,
    outros: 0,
    stage: 0
  })
  const [expenses, setExpenses] = useState({
    renda: 0,
    luz: 0,
    agua: 0,
    telecomunicacoes: 0,
    comida: 0,
    transporte: 0,
    stage : 0
  })
  
  const [ balance , setBalance ] = useState({ })
  
  const initialState = { receipts , expenses }

  const balanceReducer = (state, action ) => {
       
      switch(action.type){
        case "receipts": {
/*            console.log(state.receipts) 
 */           }      
        case "expenses":
          
          
        break;
        case "newReceipts": 
             <NewReceipt />
        break;  
        case "newExpenses":
          return state
        default:
          return state;
      }
    }
  

    const value = useReducer(balanceReducer, initialState)

  return (
    <BalanceContext.Provider value={value}>
        {props.children}
    </BalanceContext.Provider>
    
  )
}

export default BalanceProvider

export const useAuth = () => React.useContext(BalanceContext)