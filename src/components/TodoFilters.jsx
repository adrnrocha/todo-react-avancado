import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const filters = [
  { label: 'Todas', value: 'all' },
  { label: 'Concluídas', value: 'completed' },
  { label: 'Pendentes', value: 'pending' },
];

export default function TodoFilters() {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <div className="filters">
      {filters.map(f => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={filter === f.value ? 'active' : ''}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
