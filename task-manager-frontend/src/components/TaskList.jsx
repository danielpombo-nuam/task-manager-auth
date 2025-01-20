import "./task.scss";

const TaskList = ({ tasks, onComplete, onDelete }) => (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.status === 'COMPLETED' ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <p>{task.description}</p>
          <p>{task.created_at}</p>
          <div className="task-buttons">
            {!task.completed && <button onClick={() => onComplete(task)}>Complete</button>}
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
  
  export default TaskList;
  