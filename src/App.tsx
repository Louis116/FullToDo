import React from "react";
import "./App.css";
import NewTask from "./component/TodoNewCard";


const App: React.FC = () => {

return(
  <div>
    <span className="heading">Task to do</span>
    <NewTask text={""} status={false} />
  </div>
  );
};

export default App;
