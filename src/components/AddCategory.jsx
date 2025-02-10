import { useState } from "react"

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('one punch');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if( inputValue.trim().length <= 1 ) return;
    // console.log(inputValue);
    setCategories((cat) => [inputValue, ...cat]);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs..."
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
