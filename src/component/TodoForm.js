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
    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
          });
          setInput('');
        };
    
        return (
            <form onSubmit={handleSubmit} className='todo-form'>
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
                  <button onClick={handleSubmit} className='todo-button edit'>
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
                 
                  <button onClick={handleSubmit} className='todo-button'>
                    Add todo
                  </button>
                </>
              )}
            </form>
          );
        }

export default TodoForm
