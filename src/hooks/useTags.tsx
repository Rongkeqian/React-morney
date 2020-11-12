import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => { //封装一个自定义Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if(localTags.length ===0){
      localTags =[
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ]
    }
    setTags(localTags)
  }, []);

  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },[tags])
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
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => {
      return tag.id === id ? {id, name} : tag;
    }));
    //另一种方法
    // const index = findTagIndex(id);
    // //深拷贝tags得到tagsClone
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // tagsClone.splice(index, 1, {id: id, name: obj.name});
    // setTags(tagsClone);
  };

  // 删除标签
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));

    //另一种方法
    // const index = findTagIndex(id);
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // tagsClone.splice(index, 1);
    // setTags(tagsClone);
  };
  //添加Tag标签
  const addTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
    if (!tagName) {
      setTags([...tags]);
      return window.alert('标签名不能为空');
    }
    if (tagName.match(/^[ ]*$/) !== null) {
      setTags([...tags]);
      return window.alert('请输入有效字符');
    }
  };
  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag};
};

export {useTags};