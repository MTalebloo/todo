import { IconButton} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import RemoveDoneRoundedIcon from "@mui/icons-material/RemoveDoneRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SendingInput from "./SendingInput";
import { useContext } from "react";
import { taskContext } from "./taskContext";
const TodoContainer = () => {
  const { TaskItems, SetTaskItems } = useContext(taskContext);
  const isDoneHandler = (id) => {
    const index = TaskItems.findIndex((target) => target.id === id);
    const newTask = [...TaskItems];
    newTask[index].isDone = !newTask[index].isDone;
    SetTaskItems(newTask);
  };
  const DeleteTaskHandler = (id) => {
    SetTaskItems(TaskItems.filter((target) => id !== target.id));
  };
  return (
    <div className="container">
      <form className="form-container">
        <SendingInput />
        <div className="form-container">
          {!TaskItems.length
            ? <h4 style={{color:"red" , padding:30}}>کاری موجود نمی باشد لطفا کاری را اضافه فرمایید با تشکر</h4>
            : ""}
          {TaskItems.map((target) => (
            <div
              className="todo-main-container"
              style={{ backgroundColor: `${target.isDone ? "#cdffc4" : ""}` }}
            >
              <div>
                <IconButton
                  aria-label="tick"
                  size="large"
                  color="success"
                  className="btn1"
                  onClick={() => isDoneHandler(target.id)}
                >
                  {target.isDone ? (
                    <RemoveDoneRoundedIcon sx={{ color: "#f99e07" }} />
                  ) : (
                    <CheckRoundedIcon />
                  )}
                </IconButton>
                <IconButton
                  aria-label="delete"
                  size="large"
                  sx={{ color: "red" }}
                  className="btn3"
                  onClick={() => DeleteTaskHandler(target.id)}
                >
                  <ClearRoundedIcon />
                </IconButton>
              </div>
              <h5 style={{ marginRight: "3px" }}>{target.title}</h5>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
export default TodoContainer;
