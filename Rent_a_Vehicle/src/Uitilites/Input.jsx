
import React from 'react'
import { useState} from 'react'

const Input = ({type,label,onChange,placeholder,value,className,error,name,}) => {

  return (
    <div>
      <input 
      label={label}
      type={type} 
      
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={className}
      name={name}
    />

    <div>{error}</div>

    </div>
  )
}

export default Input