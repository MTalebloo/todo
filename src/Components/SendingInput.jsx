import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { taskContext } from "./taskContext";
import { useContext } from "react";
import "../css/style.css"
const SendingInput = () => {
  const { TaskItems, SetTaskItems } = useContext(taskContext);
  const [Task, setTask] = useState();
  const valueinputhandler = (event) => {
    setTask(event.target.value);
  };
  const SendingTaskHandler = (event) => {
    event.preventDefault();
    SetTaskItems([...TaskItems, {
      id: Math.random(),
      title: Task,
      isDone: false
    }]);
  };
  return (
    <div>
      <TextField
        id="outlined-textarea"
        label="کار خود را وارد کنید "
        placeholder="وارد کنید"
        multiline
        color="success"
        borderColor="red"
        onChange={valueinputhandler}
      />
      <button type="submit" onClick={SendingTaskHandler} className="sub-btn">
        <Button variant="contained" color="success" className="sub-btn-main">
          ارسال
        </Button>
      </button>
    </div>
  );
};
export default SendingInput;
