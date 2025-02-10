import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('one punch');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const newInputValue = inputValue.trim();
    if( newInputValue.length <= 1 ) return;
    // console.log(inputValue);
    // setCategories((cat) => [inputValue, ...cat]);
    onNewCategory(newInputValue);
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
