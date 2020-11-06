import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSections = styled.section`
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
const NotesSection =styled.section`
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

const CategorySection = styled.section`
>ul{
display: flex;
background:#c4c4c4;
font-size: 24px;
  >li{
    width: 50%;
    text-align:center;
    padding:18px 0;
    position: relative;
    &.selected:after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      width: 100%;
      background: #333;
    }
  }
}
`

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
const MyLayout =styled(Layout)`
display: flex;
flex-direction: column;
`
function Money() {
  return(
    <MyLayout className = 'xxx'>
       <TagSections>
          <ol>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
          </ol>
         <button>新增标签</button>
       </TagSections>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type='text' placeholder='在这里添加备注'/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className='selected'>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
         <button className='ok'>OK</button>
          <button className='zero'>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}
export default Money