import styled from 'styled-components';

const NotesSection = styled.section`
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
export {NotesSection}