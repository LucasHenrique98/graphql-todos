import React from 'react';

import { useQuery } from '@apollo/client';

import TODOS_QUERY from '../queries/todos';

export default function TodoList() {
  const { data, loading } = useQuery(TODOS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderTodos = () => {
    return data.todos.map((todo) => {
      return (
        <li className="w-full border-solid border-b border-blue-300 my-5" key={todo.id}>
          <div className="flex items-center w-full justify-between">
            <p>{todo.description}</p>
            <button className="ml-10 bg-red-500 hover:bg-red-900 text-white p-0.5 rounded-md border-2 border-solid border-red-900">
              Delete
            </button>
          </div>
        </li>
      );
    });
  };

  return <ul className="border-solid border rounded p-2 w-6/12 bg-cyan-100">{renderTodos()}</ul>;
}
