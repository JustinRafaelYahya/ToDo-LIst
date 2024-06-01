import { useReducer, useState } from "react";

import AddTask from "./components/AddTask";
import TaksList from "./components/TaskList";
import tasksReducer from "./reducers/task-reducer.js";

const initialTasks = [
  { id: 1, title: "Create Guest Experience mobile check-in", completed: false },
  { id: 2, title: "Document current CI/CD Process", completed: false },
  {
    id: 3,
    title: "Perform Code Review for final Pillow-Talk release",
    completed: false,
  },
  {
    id: 4,
    title: "Implement new Color Palette from Design Team",
    completed: false,
  },
  {
    id: 5,
    title: "Fix image uploading process for guest check-in",
    completed: false,
  },
  {
    id: 6,
    title: "Provide on-boarding documentation",
    completed: false,
  },
];
let nextTaskId = 7;

function App() {
  const [tasuku, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(taskTitle) {
    setTasks([
      ...tasuku,
      { id: nextTaskId++, title: taskTitle, completed: false },
    ]);
  }

  // function handleAddTask(taskTitle) {
  //   dispatch({
  //     type: "added",
  //     id: nextTaskId++,
  //     title: taskTitle,
  //   });
  // }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <div
        id="choresTodo"
        className="text-slate-200 bg-slate-600 w-full h-screen flex"
      >
        <div className="container bg-[#1a202c] max-w-[800px] m-auto mt-20 rounded-md">
          <div className="p-8">
            <h1 className="text-2xl text-center font-semibold mb-2">
              Chores ToDo List
            </h1>
            <TaksList
              tasks={tasks}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          </div>
          <div className="border-t-[2px] border-[#3a404c]"></div>
          <div className="p-">
            <AddTask onAddTask={handleAddTask} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
