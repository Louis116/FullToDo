import React, {useState} from "react";
import "./App.css";
import NewTask from "./component/TodoNewCard";
import { todoProps } from "./model";

const App: React.FC = () => {
  
  const [todo,setTodo] =useState<string | Date>("");
  const [todolist, setTodolist] = useState<todoProps[]>([]);

  const handleAddNewTask = (e:React.FormEvent) =>{
    e.preventDefault();
  }

  return(
  <div>
    <span className="heading">Task to do</span>
    <NewTask todo={todo} setTodo={setTodo} handleAddNewTask={handleAddNewTask}/>
  </div>
  );
};

export default App;
