import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from 'components/Money/CategorySection';
import {useRecords} from 'hooks/useRecords';
import {useTags} from '../hooks/useTags';

import styled from 'styled-components';

const Item  = styled.div`
display: flex;
justify-content: space-between;
background: #fff;
font-size:16px;
line-height: 20px;
padding:10px 16px;
>.note{
  margin-right: auto;
  color:#999;
  margin-left:16px;
}
`
function Statistics() {
  const [category, setCategory] = useState<'+' | '-'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const selectedRecords = records.filter(r => r.category ===category)

  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      <div>
        {selectedRecords.map(r => {
          return <Item>
            <div>
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className='note'>{r.note}</div>}
            <div>￥{r.amount}</div>
            {/*{day(r.createAt).format('YYYY-MM-DD')}*/}
          </Item>;
        })}
      </div>
    </Layout>

  );
}

export default Statistics;