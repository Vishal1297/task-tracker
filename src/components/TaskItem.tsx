import React, { useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Task } from "../model";
import "../style.css";

interface Props {
  id: number;
  task: string;
  isDone: boolean;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem = ({ id, task, isDone, setTasks }: Props) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editTask, setEditTask] = React.useState<string>(task);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTasks((prevTasks: Task[]) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prevTasks: Task[]) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks((prevTasks: Task[]) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, task: editTask } : task
      )
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="task_item" onSubmit={(e) => handleEdit(e, id)}>
      {edit ? (
        <input
          value={editTask}
          ref={inputRef}
          onChange={(e) => setEditTask(e.target.value)}
          className="task_item_text"
          required
        />
      ) : isDone ? (
        <s className="task_item_text">{task}</s>
      ) : (
        <span className="task_item_text">{task}</span>
      )}

      <div className="task_item_actions">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>

        <span className="icon" onClick={() => handleDelete(id)}>
          <AiFillDelete />
        </span>

        <span className="icon" onClick={() => handleDone(id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TaskItem;
