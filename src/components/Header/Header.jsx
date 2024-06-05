import React, { useEffect, useState } from 'react'
import List from '../List/List'
import Edit from '../Edit/Edit'
import "./Header.css"


const getItem = () =>{
    const  item = localStorage.getItem("todo")
    if (item) {
      return  JSON.parse(localStorage.getItem("todo"));
    }else{
      return []
    }
}

export default function Header() {

  const [input, setInput] = useState("")
  const [items, setItems] = useState(getItem())
  const [editing, setEditing] = useState("")
  const [indexx, setIndexx] = useState(0)

  useEffect(() => {
        let data = localStorage.setItem('todo',JSON.stringify(items))
  },[items]);

  // Function to handle form submission
  const handleChange  = (e) => {
    setInput(e.target.value);
  }

  const storeItems = (e)=>{
    e.preventDefault();
    if (input) {
      setItems([...items, {input, showEdit: false, completed: false}]);
      setInput('');
    }
  }

  const deleteItem  = (id) =>{
      setItems(items.filter((item,index)=> index !== id))
  }

  const handleUpdateText = (id, text)=>{
    const newItems = [...items]
    const result = newItems.forEach((value, index)=>{
      index == id
      if(index == id){
        value.showEdit = true
      }
    })
    setItems(newItems)

    const filterResult = items.filter((value, index)=>index == id)
    console.log(filterResult,"_____filterResult");
    const  [input]=filterResult;
    const inputValue = input.input
    console.log(inputValue,"__________inputValue");
    setEditing(inputValue);
    setIndexx(id)
  }

  const complete = (id)=>{
    const newItems = [...items]
    const result = newItems.forEach((value, index)=>{
      index == id
      if(index == id){
        value.completed?  value.completed = false:  value.completed = true
      }
    })
    setItems(newItems)
    setIndexx(id)
  }

  const editSumit = ()=>{
      const result = [...items]
      result[indexx].input = editing
      result[indexx].showEdit=false
      setItems(result)
  }

  const handleChangeValue = (e)=>{
      setEditing(e.target.value)
  }

  return (
    <div className='header'>
        <div className='header-container'>
            <h1>ToDo App</h1>
        </div>
        <div className='todo-container'>
            <form className='input-group' onSubmit={storeItems}>
                <h1>Write To Do</h1>
                <input type="text" value={input} onChange={handleChange} placeholder="Enter Task Here" />
            </form>
        </div>
        <List  items={items}  deleteItem={deleteItem} editInput={handleUpdateText} editing={editing} editSumit={editSumit} handleChangeValue={handleChangeValue} complete={complete}/>
        

    </div>
  )
}
