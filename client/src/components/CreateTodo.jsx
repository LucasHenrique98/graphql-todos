import React from 'react';

export default function CreateTodo() {
  return (
    <form className="flex items-center justify-center mb-10">
      <input className="border-b-2 border-solid border-sky-200" type="text" placeholder="Todo description" />
      <button className="ml-10 bg-sky-500 hover:bg-sky-900 text-white p-1 rounded-md border-2 border-solid border-sky-900">
        Add Todo
      </button>
    </form>
  );
}
