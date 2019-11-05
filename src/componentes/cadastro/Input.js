import React from 'react';
import "./Input.scss";


const Input = ({ label, min, placeholder, type, value, ref, obrigatorio }) => {
 
  return (
    <div className="Input">
      <label>{label}{obrigatorio ? " *" : ""}</label>
      <input min={min} required={obrigatorio} type={type} placeholder={placeholder} value={value} ref={ref} />
    </div>
  )
}
export default Input;