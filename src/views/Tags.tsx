import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icom';
import {Link} from 'react-router-dom';


const TagList = styled.ol`
  font-size: 16px;
  padding:0 16px ;
  >li{
     border-bottom:1px solid #d5d5d5;
    >a{
         padding:12px 0;
       display: flex;
       align-items: center;
       justify-content: space-between;
    }
      .icon{
      width:18px;
      height:18px;
      }
      span{
        flex-grow: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
  }
`;

const Button = styled.button`
  font-size: 18px;
  border:none;
  padding:8px 12px;
  background:#18a0fb;
  border-radius: 4px;
  color:#f5f5f5;
`;

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Space = styled.div`
height: 16px;
`;

function Tags() {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(t =>
          <li key={t.id}>
            <Link to={'/tags/' + t.id}>
              <span>{t.name}</span>
              <Icon name='right'/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Button>新增标签</Button>
        <Space/>
      </Center>
    </Layout>
  );
}

export default Tags;