import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { Task } from '../model';

interface Props {
    id: number
    task: string
    isDone: boolean
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskItem= ({id, task, isDone, setTasks}: Props) => {
    return (
      <div className="task">
        <span>{task}</span>
        <button
          onClick={() => setTasks((tasks) => tasks.filter((t) => t.id !== id))}
        >
          <RiDeleteBin5Line />
        </button>
      </div>
    );
}

export default TaskItem