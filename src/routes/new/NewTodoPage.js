import React from 'react';
import { TodoForm } from '../../UI/TodoForm';
import { useTodos } from '../useTodos';

function NewTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo  } = stateUpdaters;
 
  return (
    <TodoForm
      label="Escribe un nuevo elemento en tu lista de compras"
      submitText="Añadir"
      submitEvent= {(text) => addTodo(text)}
    />
  );
}

export { NewTodoPage };