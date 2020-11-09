import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
background: #f5f5f5;
padding:0 16px;
font-size: 14px;
> label{
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
}
`

const NoteSection:React.FC =()=>{
const [note,setNote] = useState('')
  console.log(note);
const refInput = useRef<HTMLInputElement>(null)
const onBlur=()=>{
    if(refInput.current !== null){
      setNote(refInput.current.value)
    }
  }
  return(
      <Wrapper>
        <label>
          <span>备注</span>
          <input type='text' placeholder='在这里添加备注'
                 // value={note}
                 // onChange={(e)=>setNote(e.target.value)} 受控制
            ref={refInput}
            defaultValue={note}
                 onBlur={onBlur}
          />
        </label>
      </Wrapper>
  )
}
export {NoteSection}