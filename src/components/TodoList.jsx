import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext);

  if (todos.length === 0) return <p>Nenhuma tarefa encontrada.</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      ))}
    </ul>
  );
}
