
const Input = (props) => {
  
  
  /* const [valor , setValor] = useState(initialValue) */
  
    return (
    <div>
        <label>{props.label}</label>
        <input name={props.name} type={props.type} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  )
}
export default Input