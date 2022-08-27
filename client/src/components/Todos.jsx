import React from 'react';

import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

export default function Todos() {
  return (
    <main className="flex flex-col items-center font-sans">
      <h1 className="text-2xl text-sky-400 mb-5 font-bold">TODOS</h1>
      <CreateTodo />
      <TodoList />
    </main>
  );
}
