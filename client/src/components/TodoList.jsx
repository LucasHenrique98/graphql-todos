import React from 'react';

import { useQuery, useMutation } from '@apollo/client';

import TODOS_QUERY from '../queries/todos';
import DELETE_TODO from '../mutations/deleteTodo';
import COMPLETE_TODO from '../mutations/completeTodo';

export default function TodoList() {
  const { data, loading, refetch } = useQuery(TODOS_QUERY);
  const [deleteTodo] = useMutation(DELETE_TODO);
  const [completeTodo] = useMutation(COMPLETE_TODO);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDeleteButtonClick = (id, event) => {
    event.stopPropagation();

    deleteTodo({
      variables: { id },
    }).then(() => {
      refetch();
    });
  };

  const handleTodoClick = (id) => {
    completeTodo({ variables: { id } }).then(() => {
      refetch();
    });
  };

  const renderTodos = () => {
    return data.todos.map((todo) => {
      return (
        <li
          onClick={() => handleTodoClick(todo.id)}
          className="w-full border-solid border-b border-blue-300 my-5"
          key={todo.id}
        >
          <div className="flex items-center w-full justify-between">
            <p>{todo.description}</p>
            <button
              onClick={(e) => handleDeleteButtonClick(todo.id, e)}
              className="ml-10 bg-red-500 hover:bg-red-900 text-white p-0.5 rounded-md border-2 border-solid border-red-900"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  };

  return <ul className="border-solid border rounded p-2 w-6/12 bg-cyan-100">{renderTodos()}</ul>;
}
