const FormRow = ({name, type, value, handleChange, labelText })=>{
  return  <div className="form-row">
            <label htmlFor={name} className="form-label">{labelText || name}</label>
            <input type={type} id={name}  name={name} value={value} onChange={handleChange} className='form-input'></input>
            
        </div>
}

export default FormRow;