import React from "react";

interface Props {
  todo: string | Date;
  setTodo: React.Dispatch<React.SetStateAction<string | Date>>;
  handleAddNewTask: ()=>void;
}

const NewTask = ({ todo, setTodo, handleAddNewTask}: Props) => {
  return (
    <form className="input">
      <div className="input_box" onSubmit={handleAddNewTask}>
        <label>Task to be done</label>
        <input
          type={"text"}
          id="task_text"
          onChange={(e) => setTodo(e.target.value)}
        ></input>
      </div>
      <div className="start_date_box">
        <label>Start Date</label>
        <input type={"date"} id="start_date"></input>
      </div>
      <div className="due_date_box">
        <label>Due Date</label>
        <input type={"date"} id="due_date"></input>
      </div>
      <button className="input_submit" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default NewTask;
