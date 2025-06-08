import './TaskList.css';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="task-checkbox"
          />
          <span className="task-text">{task.text}</span>
          <button 
            onClick={() => onDelete(task.id)} 
            className="delete-button"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;