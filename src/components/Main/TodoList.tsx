import { FC } from 'react';
import { TodoItem } from './TodoItem';
import { TodoListProps } from './types';

export const TodoList: FC<TodoListProps> = ({
  isVisible,
  filteredTodos,
  toggleTodo,
}) => {
  let listClasses =
    'divide-y divide-orange-500 p-2 transition-all duration-500';
  if (isVisible) {
    listClasses += ' max-h-96 overflow-y-auto';
  } else {
    listClasses += ' max-h-0 opacity-0';
  }

  return (
    <ul className={listClasses}>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          id={todo.id}
          completed={todo.completed}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};
