import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];

const useTags = () => { //封装一个自定义Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  //编辑标签
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    //深拷贝tags得到tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone);
  };

  // 删除标签
  const deleteTag = (id: number) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1);
    setTags(tagsClone);
  };
  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag};
};
export {useTags};