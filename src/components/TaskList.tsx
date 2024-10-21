import { Task } from "../model";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <TaskItem
          task={task.task}
          id={task.id}
          key={task.id}
          isDone={task.isDone}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default TaskList;
