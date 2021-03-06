import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from 'components/Money/TagsSection';
import {NoteSection} from 'components/Money/NoteSection';
import {CategorySection} from 'components/Money/CategorySection';
import {NumberPadSection} from 'components/Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
const CategoryWrapper = styled.div`
background: #c4c4c4;
`
type Category = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const { addRecord} = useRecords();

  //type Selected = typeof selected; //获取值（selected）的类型
  const onChange = (obj: Partial<typeof selected>) => {  //partial部分类型
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };
  return (
    <MyLayout scrollTop={
      document.documentElement.clientHeight
    }>
      {/*{selected.note}*/}
      {/*{JSON.stringify(selected)}*/}

      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={(category) => onChange({category})}/>
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;