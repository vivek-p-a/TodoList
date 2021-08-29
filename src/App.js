import './App.css';
import {TodoItem} from './TodoItem'
import React, { useState, useEffect } from 'react';
function App() {
    const [todos, setTodos] = useState([]);
    function handleSubmit(e) {
        const {todoItem} = e.target.elements
        let todoTask = todoItem.value
        setTodos([...todos, todoTask])
        e.preventDefault()
        e.target.reset()
    }

    // Debugging
    useEffect(() => {
        console.log(todos)
      }, [todos]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
       <input type="text" id="todoItem"/>
       <input type="submit" value="Add Todo" />
    </form>
    {todos.map((todo, index) => (
          <TodoItem todoItem = {todo} key = {index}/>
      ))}

    </div>

  );
}

export default App;
