import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from 'components/Money/TagsSection';
import {NoteSection} from 'components/Money/NoteSection';
import {CategorySection} from 'components/Money/CategorySection';
import {NumberPadSection} from 'components/Money/NumberPadSection';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  //type Selected = typeof selected; //获取值（selected）的类型
  const onChange = (obj: Partial<typeof selected>) => {  //partial部分类型
    setSelected({
      ...selected,
      ...obj
    });
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={(tags) => onChange({tags})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={(category) => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={() => {}}
      />
    </MyLayout>
  );
}

export default Money;