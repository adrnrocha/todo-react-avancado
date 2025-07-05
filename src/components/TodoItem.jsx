import React from 'react';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.completed ? 'done' : ''}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>X</button>
    </li>
  );
}

export default React.memo(TodoItem);
