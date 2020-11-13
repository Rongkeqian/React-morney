import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
>ul{
display: flex;
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
type Props ={
  value:'-' | '+';
  onChange:(value:'-'| '+')=>void;
}
const CategorySection:React.FC<Props> =(props)=>{
  const categoryMap = {'-':'支出','+':'收入'}
  type Keys = keyof typeof categoryMap;   //等同于 const []
  const [categoryList] = useState<Keys[]>(['-','+'])   //const [categoryList] =useSate<('-'|'+')[](['-','+'])>
  const category = props.value;
    return(
      <Wrapper>
        <ul>
          {categoryList.map(c =>
            <li key={c} className={category === c ? 'selected' :''}
                onClick={()=>{props.onChange(c)}}
            >{categoryMap[c]}</li>
          )}
        </ul>
      </Wrapper>
    )
}
export {CategorySection}