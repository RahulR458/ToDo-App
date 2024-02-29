import React, { useState } from 'react'
import List from '../List/List'
import Edit from '../Edit/Edit'
import "./Header.css"


export default function Header() {

  const [input, setInput] = useState("")
  const [items, setItems] = useState([])
  const [editing, setEditing] = useState("")
  const [indexx, setIndexx] = useState(0)

  // Function to handle form submission
  const handleChange  = (e) => {
    setInput(e.target.value);
  }

  const storeItems = (e)=>{
    e.preventDefault();
    setItems([...items, input]);
    setInput('');
  }

  const deleteItem  = (id) =>{
    // let r=window.confirm("Are you sure to remove this item?")
    // if(r){
      setItems(items.filter((item,index)=> index !== id))
      // alert('Deleted')
    // }else{
      // return false;
    // }
  }

  const handleUpdateText = (id, text)=>{
    const result = items.filter((value, index)=>index == id)
    // setItems([...result])
    setEditing(result);
    setIndexx(id)
    // const updatedList = items.map((e)=>{
      // if(e.id === id){
      //   e.text = text
      // }
      // return e
    // })
    // setItems(updatedList)
    // console.log(updatedList);
    // alert("hi")
  }

  const editSumit = ()=>{
    console.log(editing);
    if(editing[0].text !==""){
      const result = [...items]
      result[indexx] = editing
      setItems(result)
      setEditing("")
   }
  }

  const handleChangeValue = (e)=>{
    if (editing[0].text !=="") {
      setEditing(e.target.value)
    }
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
                {/* <a>Add Todo</a> */}
            </form>
        </div>
        <List  items={items}  deleteItem={deleteItem} editInput={handleUpdateText} />
        <Edit  editing={editing} editSumit={editSumit} handleChangeValue={handleChangeValue} />

    </div>
  )
}
