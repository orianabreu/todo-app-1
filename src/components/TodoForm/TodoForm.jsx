import React, {useState} from 'react';
import {AiOutlineDelete} from "react-icons/ai";
import { IconContext } from "react-icons";
import './TodoForm.css';
import TodoButton from '../TodoButton';
import TodoInput from '../TodoInput';

function TodoForm() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    function handleChange(event) {
        setInput(event.target.value);
    }

    function removeItem(id) {
        setList([...list].filter((text, index) => index !== id))
    }

    function newList(text, id) {
        return <div className='todo-list'>
        <p className='input-text' key={id}>{text}</p>
        <IconContext.Provider value={{ className: "delete-icon" }}>
        <div>
        <AiOutlineDelete onClick={() => removeItem(id)}/>
        </div>
        </IconContext.Provider>
        </div>
    }

    function handleClick() {
        setList([...list, input]);
        setInput("");
    }

    return (
        <div>
            <TodoInput    
                type='text'
                placeholder='Add your task'
                name='text'
                value={input}
                onChange={handleChange}
            />
            <TodoButton         
                onClick={handleClick}>
                Add
            </TodoButton>
            <p>{list.map(newList)}</p>
    
        </div>
    )
}

export default TodoForm;
