import { Fragment, useState, useContext } from 'react'
import "./Modal.css"

import NewReceipt from '../../context/NewReceipt'
import NewExpense from '../../context/NewExpense'

import { BalanceContext } from '../../context/BalanceProvider'
import Receipts from '../../context/Receipts'
import Expenses from '../../context/Expenses'

const Modal = (props) => {
  
  const [dataState, dispatch] = useContext(BalanceContext)
  

  const [show, setShow] = useState(false)
  const toggle = () => {
    setShow(!show)
    
  };
  show === true ? dispatch({ type: props.type }) : dispatch({ type: null })
  /* payload ({}) */
  return (
    <Fragment>
      <span className='btn' onClick={toggle}>
        {props.title}
      </span>
      
      <div className={`modal ${show && "show"}`} onClick={toggle}>
        <div className='modal-content' onClick={(e)=> e.stopPropagation()} >
          <div className="modal-header">
            <h2 className="title">{props.title}</h2>
            <h2 className="modal-close" onClick={toggle}> X </h2>
          </div>
          <div className="modal-body">
            <div className="form-control">
              
               
             {/*  { props.type === "receipts" && (() => dispatch({ type: "receipts" }))} 
              { props.type === "expenses" && (() => dispatch({ type: "expenses" }))} 
              { props.type === "newReceipt" && (() => dispatch({ type: "newReceipt" }))} 
              { props.type === "newExpense" && (() => dispatch({ type: "newExpense" }))}  */}
               { props.type === "expenses" && <Expenses /> }
              { props.type === "receipts" && <Receipts /> } 
               { props.type === "newExpense" && <NewExpense /> }
              { props.type === "newReceipt" && <NewReceipt /> } 
          
            </div>
            {/* footer */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal