import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import "./todo.css"

function Todo() {
  const [inputvalue,setValue] = useState('')
  const [inputvalues,setvalues] = useState([])
  const [newEdit, setvalueEdit] = useState(false)
  function changeValue(e){
   setValue(e.target.value)
  }

  function onclickButton(e){
        e.preventDefault()
        if(newEdit !== false){
          inputvalues[newEdit] = inputvalue
          setvalueEdit(false)
        } 
        else
        setvalues([...inputvalues, inputvalue])
        setValue('')
  }

  function liDelete(e, index){
    e.preventDefault()
    setvalues(inputvalues.filter((inputvalue, id)=> {
      return id !== index
    }))

  }
  
  function liEdit(e, index){
    e.preventDefault()
    setValue(inputvalues[index])
    setvalueEdit(index)
  }

  return (
    <>
      <form>
        <input type='text' placeholder='Enter Your TAsk' value={inputvalue} onChange={changeValue}></input>
      <button onClick={onclickButton}>Add</button>
      </form>

      <div>
        {
          inputvalues.map((items, index)=>{
            return (
            <u>
              <li key={index}>{items}
              <a href='' onClick={(e)=> liDelete(e, index)}><DeleteIcon/></a>
              <a href='' onClick={(e) => liEdit(e, index)}><ModeEditIcon/></a>

              </li>
            </u>
            )
          })
        }
        
      </div>
      

    </>
  )
}

export default Todo