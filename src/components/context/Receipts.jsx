import React ,{ useContext } from 'react'

import { BalanceContext, useAuth } from './BalanceProvider'

const Receipts = () => {
    
    const [dataState, dispatch] = useContext(BalanceContext)
   

  return (
    <div>Receipts
        

    </div>
  )
}

export default Receipts