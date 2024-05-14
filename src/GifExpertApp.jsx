import { useState } from "react"
import { AddCategory } from "./components";
import { GifGrid } from "./components";

let contador = 0;

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onNewCategory = (newCategory) => {

        setCategories([...categories, newCategory])
    }

    console.log(categories);

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={event => onNewCategory(event)}
            />

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )

}