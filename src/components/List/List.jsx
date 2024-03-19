import React from 'react'
import './List.css'
import Edit from '../Edit/Edit';

export default function List({items, deleteItem, editInput, editing, complete, handleChangeValue, editSumit}) {


  
  console.log(items);
  return (
    <div className='list-section'>
        <ul>
          {items.map((data,index)=>(
            <div key={index}>
                  <li className='li-container'>
                    {data.completed?(
                      <input className='checkbox' defaultChecked={true} onClick={()=>complete(index)} type="checkbox" />
                      ) : (
                      <input className='checkbox'  onClick={()=>complete(index)} type="checkbox" />
                    )}
                    {data.completed?<del>{data.input}</del>:<span>{data.input}</span>}
                    <i onClick={()=>editInput(index)} className="fa-solid fa-pen-to-square"></i>
                    <i onClick={()=>deleteItem(index)} className="fa-solid fa-trash-can"></i>
                  </li>
                  {data.showEdit && <Edit  editing={editing} handleChangeValue={handleChangeValue} editSumit={editSumit} />} 
             </div>
          ))}
            {/* <li>Clean the house</li> */}
            {/* <i class="fa-solid fa-square-check"></i> */}
        </ul>
    </div>

  )
}
