import styled from 'styled-components';

const TagsSection = styled.section`
  flex-grow:1;
  background:#FFF;
  padding:0 16px;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
  margin: 0 -12px;
    >li{
      background: #ff8a8e;
      color: #fff;
      display: inline-block;
      border-radius: 18px;  
      padding:4px 16px;
      font-size:14px;
      margin:6px 12px;
    }
  }
  >button{
    border:none;
    border-bottom:1px solid #333;
    font-family: inherit;
    padding:2px 4px;
    color:#666;
    margin-top:16px;
  }
`

export {TagsSection}