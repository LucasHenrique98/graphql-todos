import React, { useRef } from 'react';

import { useMutation } from '@apollo/client';

import ADD_TODO from '../mutations/addTodo';
import todos from '../queries/todos';

export default function CreateTodo() {
  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: todos }],
  });
  const input = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo({ variables: { description: input.current.value } }).then(() => {
      input.current.value = '';
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex items-center justify-center mb-10">
        <input
          ref={input}
          className="border-b-2 border-solid border-sky-200"
          type="text"
          placeholder="Todo description"
        />
        <button
          type="submit"
          className="ml-10 bg-sky-500 hover:bg-sky-900 text-white p-1 rounded-md border-2 border-solid border-sky-900"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}
