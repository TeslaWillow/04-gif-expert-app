import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['one punch', 'DBZ']);

    const onAddCategory = () => {
        setCategories(['Valorant', ...categories]);
        // 2nd way to achive the same
        // setCategories( (cat) => [...cat, 'valorant'] );
    };

  return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory setCategories={ setCategories } />

        {/* Listado de gifs */}
        <ol>
            {
                categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))
            }
        </ol>
            {/* Gift item */}
    </>
  )
}
