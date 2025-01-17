const TaskList = ({ tasks, onComplete, onDelete }) => (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          {!task.completed && <button onClick={() => onComplete(task.id)}>Complete</button>}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
  
  export default TaskList;
  