import React from 'react';
import styled from 'styled-components';

const Label =styled.label`
display: flex;
align-items: center;
  >span{
    margin-right: 16px;
    white-space: nowrap;
  }
  > input{
    display: block;
    flex:1;
    height: 72px;
    border:none;
    background:none
  }
`
type Props ={
  label:string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input:React.FC<Props> =(props)=>{
  const {label,children,...rest} = props
  return(
    <Label>
      <span>{props.label}</span>
      <input { ...rest }
             // type={props.type}
             // placeholder={props.placeholder}
             // defaultValue={props.defaultValue}
             // onBlur={props.onBlur}
      />
    </Label>
  )
}
export {Input}
