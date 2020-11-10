import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import {Input} from '../Input';

const Wrapper = styled.section`
background: #f5f5f5;
padding:0 16px;
font-size: 14px;

`
type Props ={
  value:string;
  onChange:(value:string)=>void
}
const NoteSection:React.FC <Props> = (props)=>{
  const note = props.value
const onChange:ChangeEventHandler<HTMLInputElement> =(e)=>{
      props.onChange(e.target.value)
  }
  return(
      <Wrapper>
        {/*<span>备注</span>*/}
        {/*<input type='text' placeholder='在这里添加备注'*/}
        {/*  // value={note}*/}
        {/*  // onChange={(e)=>setNote(e.target.value)} 受控制*/}
        {/*       ref={refInput}*/}
        {/*       defaultValue={note}*/}
        {/*       onBlur={onBlur}*/}
        {/*/>*/}
        <Input label='备注'
               type='text'
               value={note}
               placeholder='请输入标签名'
               onChange={onChange}/>

      </Wrapper>
  )
}
export {NoteSection}