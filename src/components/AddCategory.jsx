import { useState } from "react"





export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInput = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        onNewCategory(inputValue.trim())
        
    }

    return (
        <form onSubmit={ (event)=> onSubmit(event)}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={(event)=>  onInput(event) }
            />
        </form>
    )


}