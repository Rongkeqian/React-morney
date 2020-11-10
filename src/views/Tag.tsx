import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout';
import Icon from '../components/Icom';
import {Button} from '../components/Button';
import styled from 'styled-components';


const Topbar =styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding:14px 16px;
  background:#FFF;
  .icon{
    width:18px;
    height:18px;
  }
`
type Params={
  id:string
}
const Tag:React.FC=(props)=>{
  const {findTag} = useTags();
  let { id } =useParams<Params>()
  const tag = findTag(parseInt(id))
return(
  <Layout>
    <Topbar>
      <Icon name='left' />
      <span>编辑标签</span>
      <Icon name='' />
    </Topbar>
    <div>
      <label>
        <span>标签名</span>
        <input type='text' placeholder={tag.name}
        />
      </label>
    </div>
    <div>
      <Button>删除标签</Button>
    </div>

  </Layout>
)
}
export {Tag}