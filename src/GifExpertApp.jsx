import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['one punch']);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);
        // 2nd way to achive the same
        // setCategories( (cat) => [...cat, 'valorant'] );
    };

  return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={ onAddCategory }
        />

        {/* Listado de gifs */}
        {
            categories.map((cat) => (
                <GifGrid 
                    key={cat} 
                    category={cat} 
                />
            ))
        }
    </>
  )
}
