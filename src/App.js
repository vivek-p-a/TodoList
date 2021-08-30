import "./App.css";
import { TodoItem } from "./TodoItem";
import React, { useState, useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [buttonStates, setButtonStates] = useState([true,false,false])
  const [editingState, setEditingState] = useState(false)
  const [idOfTodoToBeEdited, setIDOfTodoToBeEdited] = useState(0)
  const handleSubmit = (e) => {
    const { todoItem } = e.target.elements;
    let todoTask = todoItem.value;
// tempObject[0] - Task, tempObject[1] = Active Status
    let tempObject = [todoTask, false];
    setTodos([...todos, tempObject]);
    e.preventDefault();
    e.target.reset();
  };

  const deleteHandler = (idx) => {
    let tempCopy = [...todos];
    tempCopy.splice(idx, 1);
    setTodos(tempCopy);
    console.log("Function called" + idx);
  };

  const checkBoxHandler = (idx) => {
    let tempCopy = [...todos];
    console.log(tempCopy[idx]);
    tempCopy[idx][1] = !tempCopy[idx][1];
    setTodos(tempCopy);
    console.log("Function called" + idx);
  };

  const editHandler = (idx) => {
    setEditingState(true)
    setIDOfTodoToBeEdited(idx)
}
  function todoMapper(items) {
    let mappedItems = items.map((todo, index) => (
        <TodoItem
          todoItem={todo[0]}
          key={index}
          deleteIndex={index}
          deleteHandler={deleteHandler}
          isActive={todo[1]}
          checkBoxHandler={checkBoxHandler}
          editHandler = {editHandler}
        />
      ))
      return mappedItems
  }

  let showAllJSX  = todoMapper(todos)
  let activeTodos = todos.filter((todo) => {return(todo[1] !== false )})
  let activeTodosJSX = todoMapper(activeTodos)
  let CompletedTodos = todos.filter((todo) => {return(todo[1] !== true )})
  let CompletedTodosJSX = todoMapper(CompletedTodos)

  const toggleHandler = () => {
      let newButtonState = [...buttonStates]
      newButtonState[0] = true
      setButtonStates([newButtonState, false, false])
  }

  const activeHandler = () => {
    let newButtonState = [...buttonStates]
    newButtonState[1] = true
    setButtonStates([false,newButtonState, false])
}

const completedHandler = () => {
    let newButtonState = [...buttonStates]
    newButtonState[2] = true
    setButtonStates([false,false,newButtonState])
}
 const editItem = (e) =>{
    const { todoItem } = e.target.elements;
    let todoTask = todoItem.value;
// tempObject[0] - Task, tempObject[1] = Active Status
    let tempObject = [todoTask, false];
    let tempTodos  = [...todos]
    tempTodos[idOfTodoToBeEdited][0] = tempObject[0]
    setTodos(tempTodos);
    e.preventDefault();
    e.target.reset();
    setEditingState(false)

 }

  // Debugging
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <form onSubmit={editingState?editItem:handleSubmit}>
        <input type="text" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="todoItem" defaultValue={editingState?todos[idOfTodoToBeEdited][0]:""}   />
        <input type="submit" value={editingState?"Update Todo":"Add Todo"}/>
      </form>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mx-1" onClick = {toggleHandler}> All Tasks </button>
      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mx-1" onClick = {activeHandler}> Active </button>
      <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mx-1" onClick = {completedHandler}> Completed </button>
      {buttonStates[0] && showAllJSX}
      {buttonStates[1] && activeTodosJSX}
      {buttonStates[2] && CompletedTodosJSX}
    </div>

  );

}

export default App;
