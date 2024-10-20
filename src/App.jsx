import { useState } from "react";
import TodoContainer from "../src/Components/TodoContainer";
import "./css/style.css";
import { taskContext } from "./Components/taskContext";
function App() {
  const [TaskItems, SetTaskItems] = useState([
    {
      id: 1,
      title: "تسک شماره 1",
      isDone: false,
    },
    {
      id: 2,
      title: "تسک شماره 2",
      isDone: true,
    },
    {
      id: 3,
      title: "تسک شماره 3",
      isDone: false,
    },
  ]);
  return (
    <div className="App">
      <taskContext.Provider value={{TaskItems, SetTaskItems}}>
        <TodoContainer />
      </taskContext.Provider>

    </div>
  );
}

export default App;
