import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icom';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button';
import {Center} from 'components/Center';
import {Space} from 'components/Space';


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

function Tags() {
  const {tags,addTag} = useTags();
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
        <Button onClick={addTag}>新增标签</Button>
        <Space/>
      </Center>
    </Layout>
  );
}

export default Tags;