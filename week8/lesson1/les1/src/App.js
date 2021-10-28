import React, { useState } from "react";
// import Button from "./components/Button";
import Input from "./components/Input";
import View from "./components/View";

function App() {
  const [todos, setTodos] = useState([])
  function addTask(task){
    let obj ={
      title: task,
      id: Date.now()
    }
    let todosArr = [...todos, obj]
    setTodos(todosArr)
  }
  
  function deleteTask(id){
    let newArr = todos.filter((item) =>{
      return item.id !==id
    })
    setTodos(newArr)
  }

  return (
    <React.Fragment>  
      <Input addTask={addTask}/>
      {/* <Button/> */}
       <View todos={todos} deleteTask={deleteTask}/>
    
    </React.Fragment>
  );
  ////или пустой тег вместо React.Fragment
}

export default App;
