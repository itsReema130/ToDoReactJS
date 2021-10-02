import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const [input,setInput]=useState('');
    const inputFocus=useRef(null)
    useEffect(()=>{
        inputFocus.current.focus()
    })
    const handleChange=e=>{
        setInput(e.target.value)
    }
    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = { input };
        const response = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
  
        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    };
    
        return (
            <form onSubmit={onSubmitForm} className='todo-form'>
              {props.edit ? (
                <>
                  <input
                    placeholder='Update your item'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputFocus}
                    className='todo-input edit'
                  />
                  <button onClick={onSubmitForm} className='todo-button edit'>
                    Update
                  </button>
                </>
              ) : (
                <>
                  <input
                    placeholder='Add To-Do'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input'
                    ref={inputFocus}
                  />
                 
                  <button onClick={onSubmitForm} className='todo-button'>
                    Add todo
                  </button>
                </>
              )}
            </form>
          );
        }

export default TodoForm
