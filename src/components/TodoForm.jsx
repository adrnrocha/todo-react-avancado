import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import useInput from '../hooks/useInput';

export default function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const { value, onChange, reset } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={value}
        onChange={onChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
