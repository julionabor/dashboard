
import Button from '../Button/Button'
import Input from './Input'


import { BalanceContext, useAuth } from '../../context/BalanceProvider'
import { useContext } from 'react'



const Form = (props) => {
  
  const [dataState, dispatch] = useContext(BalanceContext)
  const category = props.category
  console.log(category)
  function handleChangeValues (event) {
    
    /* const fieldName = event.target.name;
    const fieldValue = event.target.value; */
    const { name, value } = event.target
      
    /* setReceipts({ [name] : value}) */
  }
  

  const arr = props.inputs

  for(let i=0 ; i <= arr.length - 1; i++){
      
  return (
    <div>
     {arr.map((item,id)=> {
          return(
            <Input 
              key={id}
              label={item.label}
              name={item.name}
              placeholder={item.placeholder}
              type={item.type}
              onChange={handleChangeValues}
            />
          )
        })
      }
      
      <div className="modal-footer">
        <Button
          name="Cancelar"
        />
        <Button
          name="Guardar"
        />           
      </div>
    </div>
  )  
  }
  
}

export default Form