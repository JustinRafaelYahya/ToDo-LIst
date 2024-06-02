import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FaRegTrashAlt } from "react-icons/fa";

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent = task.title;

  return (
    <>
      <div className="flex justify-between m-auto max-w-[650px] py-3">
        {/* <label> */}
        <span className="flex">
          <input
            type="checkbox"
            className="relative appearance-none mt-1 w-4 h-4 border-[2px] border-[#439276] rounded-sm focus:outline-none checked:bg-pink-300 hover:ring hover:ring-gray-300 cursor-pointer"
            checked={task.completed}
            onChange={(e) => onChange({ ...task, completed: e.target.checked })}
          />
          <p className="mx-10">{taskContent}</p>
        </span>
        <span className=" h-[38px] w-[6%] flex justify-center items-center border-[1px] border-[#d2a6ae] p-2 -my-1 rounded-md">
          <button
            onClick={() => onDelete(task.id)}
            className="flex justify-center"
          >
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ color: "#feb5bc", scale: "85%" }}
            />
          </button>
        </span>
        {/* </label> */}
      </div>
    </>
  );
}

export default Task;
