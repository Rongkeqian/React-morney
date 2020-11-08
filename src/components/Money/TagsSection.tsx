import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
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
      &.selected{
      background: #fc474d;
      }
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
`;

const TagsSection:React.FC = () => {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  const [selectedTags,setSelectedTags] = useState<string[]>([])

  const onAddTag =()=>{
    const tagName =window.prompt('新标签的名称为');
    if(tagName !== null){
      setTags ([...tags,tagName])
    }
    // if(!tagName){
    //   setTags ([...tags])
    //  return  window.alert('标签名不能为空')
    // }
    // if(tagName.match(/^[ ]*$/) !== null){
    //   setTags ([...tags])
    //   return window.alert('请输入有效字符')
    // }
  }
  const onToggleTag=(tag:string)=>{
    const index = selectedTags.indexOf(tag)
    if(index>=0){
      setSelectedTags(selectedTags.filter(t=>t!==tag))
      //如果tag已被选中，就复制所有没有被选中的tag,作为
    }else {
      setSelectedTags([...selectedTags,tag])
    }
  }
  const getClass =(tag:string)=>{ return selectedTags.indexOf(tag) >=0 ? 'selected' :''}
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=> <li key={tag}
                            onClick={()=>onToggleTag(tag)}
                           className={getClass(tag)}>
                              {tag}
                        </li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>);

};
export {TagsSection};