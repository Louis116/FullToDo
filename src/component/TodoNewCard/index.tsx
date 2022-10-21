import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { todoProps } from "../../model";

const NewTask: React.FC<todoProps> = ({ text, start_date, due_date }) => {
  const [task, setTask] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [due, setDue] = useState<string>("");

  const onTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const onStartChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.value);
  };
  const onDueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDue(e.target.value);
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTask("");
    setStart("");
    setDue("");
  };
  
  useEffect(() => {
    console.log(`Task added ${task}`);
}, [task]);
  

  return (
    <form className="TodoNewCard" onSubmit={(e)=>handleNewTask(e)}>
      <label>Task to be done</label>
      <input
        type="text"
        value={task}
        name={text}
        onChange={onTaskChange}
        required
      />
      <label>Start Date</label>
      <input
        type="date"
        value={start}
        name={start_date?.toLocaleDateString()}
        onChange={onStartChange}
        required
      />
      <label>Due Date</label>
      <input
        type="date"
        value={due}
        name={due_date?.toLocaleDateString()}
        onChange={onDueChange}
        required
      />
      <button type="submit"> Submit </button>
    </form>
  );
};

export default NewTask;
