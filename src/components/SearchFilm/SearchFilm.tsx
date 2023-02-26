import { useState, useEffect } from 'react';
import { searchTextState } from '../../state/filmState'
import { useSetRecoilState } from 'recoil'

type Props = {
  defaultValue?: string
}

function SearchFilm({ defaultValue = '' }: Props) {
  
  const searchText = useSetRecoilState(searchTextState)
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    const id = setTimeout(() => {
      searchText(inputText);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [inputText, searchText]);
  return (
    <>
    <input
      type="text"
      autoFocus
      defaultValue={defaultValue}
      onChange={e => setInputText(e.target.value)}
      placeholder="Search Films"
    />
    </>
  )
}

export default SearchFilm