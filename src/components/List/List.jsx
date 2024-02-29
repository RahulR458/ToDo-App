import React from 'react'
import './List.css'

export default function List({items, deleteItem, editInput}) {


  
  console.log(items);
  return (
    <div className='list-section'>
        <ul>
          {items.map((data,index)=>(
                  <li key={index} className='li-container'>
                    <input className='checkbox' type="checkbox" />
                    {data}
                    <i onClick={()=>editInput(index)} className="fa-solid fa-pen-to-square"></i>
                    <i onClick={()=>deleteItem(index)} className="fa-solid fa-trash-can"></i>
                  </li>

          ))}
            {/* <li>Clean the house</li> */}
            {/* <i class="fa-solid fa-square-check"></i> */}
        </ul>
    </div>
  )
}
