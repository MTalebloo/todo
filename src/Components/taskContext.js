import { createContext } from "react";

export const taskContext = createContext({
  TaskItems: [],
  SetTaskItems: () => {},
});
