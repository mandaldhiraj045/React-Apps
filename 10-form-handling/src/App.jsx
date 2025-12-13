import React, { useState } from 'react'

function App() {

const [title, setTitle] = useState('')

const submitHandler = (elem)=>{
  elem.preventDefault();
  console.log('form submitted by', title);
  setTitle('')

}

  return (
    <div>
      <form onSubmit={(elem) => {
        submitHandler(elem)
      }}>
        <input 
        type="text"
        placeholder='Enter your name'
        value={title}
        onChange={(elem)=>{
          setTitle(elem.target.value);

        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App