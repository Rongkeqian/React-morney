import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSections = styled.section`
  background:#FFF;
  padding:0 16px;
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
    font-family: inherit;
    padding:2px 4px;
    border-bottom:1px solid #333;
    color:#666;
    margin-top:16px;
  }
`
const NotesSection =styled.section``

const CategorySection = styled.section``

const NumberPadSection = styled.section``

function Money() {
  return(
    <Layout>
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
          <input type='text'/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div>
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
         <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}
export default Money