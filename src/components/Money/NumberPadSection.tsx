import styled from 'styled-components';

const NumberPadSection = styled.section`
display:flex;
flex-direction: column;
> .output{
  background: #fff;
  font-size:36px;
  line-height: 72px;
  text-align:right;
  padding:0 16px;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
              inset 0 5px 5px -5px rgba(0,0,0,0.25);
}
> .pad{
  float: left;
   >button{
      width:25%;
      height: 64px;
      font-size: 18px;
      border:none;
      border-bottom:1px solid #f2f2f2;
      line-height: 1.2;
      border-bottom:1px solid #d9d9d9;
      border-right: 1px solid #d9d9d9;
      &.ok{
            height: 128px;
            float: right;
      }
      &.zero{
      width: 50%;
      }
   }
}
`
export {NumberPadSection}
