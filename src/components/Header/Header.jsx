import React, { useState } from 'react'
import List from '../List/List'
import "./Header.css"


export default function Header() {

  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  // Function to handle form submission
  const handleChange  = (e) => {
    setInput(e.target.value);
  }

  const storeItems = (e)=>{
    e.preventDefault();
    setItems([...items, input]);
    setInput('');
  }
  console.log(items);

  return (
    <div className='header'>
        <div className='header-container'>
            <h1>ToDo App</h1>
        </div>
        <div className='todo-container'>
            <form className='input-group' onSubmit={storeItems}>
                <h1>Write To Do</h1>
                <input type="text" value={input} onChange={handleChange} placeholder="Enter Task Here" />
                {/* <a>Add Todo</a> */}
            </form>
        </div>
        <List  items={items}/>
    </div>
  )
}
