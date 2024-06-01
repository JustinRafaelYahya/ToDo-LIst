import { useState } from "react";

function AddTask() {
  const [task, setTask] = useState("");

  return (
    // <div className="border-t-[3px]">
    <div className="max-w-[650px] flex flex-col m-auto">
      <h1 className="pt-4 text-2xl text-center font-semibold ">Done : 0</h1>
      <label className="py-2">Add todo</label>
      <input
        className="rounded-md h-[35px] bg-transparent border-2 border-[#3a404c]"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="h-[35px] rounded-md mt-3 py-2 mb-10 w-[100px] text-sm font-bold flex justify-center items-center bg-[#8ccef0] text-black hover:scale-110"
        onClick={() => {
          setTask("");
        }}
      >
        ADD TASK
      </button>
    </div>
    // </div>
  );
}

export default AddTask;
