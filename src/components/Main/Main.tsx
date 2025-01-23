import { useRef, useState } from 'react';

import { Filters } from './Filters';
import { Input } from './Input';
import { Filter, InputProps, Todo } from './types';
import { TodoList } from './TodoList';

export const Main: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState<Filter>(Filter.all);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const addTodo = () => {
    if (!inputRef.current?.value.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now() + Math.random(),
        text: inputRef.current.value.trim(),
        completed: false,
      },
    ]);
    inputRef.current.value = '';
  };

  const toggleTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const keyDownHandler: InputProps['keyDownHandler'] = (e) =>
    e.key === 'Enter' && addTodo();

  const toggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === Filter.active) return !todo.completed;
    if (filter === Filter.completed) return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodos(todos.filter((todo: Todo) => !todo.completed));
  };

  const filterHandler = (filterType: Filter) => {
    setFilter(filterType);
  };

  const activeTodosNumber = todos.filter(
    (todo: Todo) => !todo.completed
  ).length;
  const completedTodosNumber = todos.length - activeTodosNumber;

  return (
    <main>
      <Input
        isVisible={isVisible}
        type="text"
        ref={inputRef}
        keyDownHandler={keyDownHandler}
        toggleVisible={toggleVisible}
      />
      <TodoList
        isVisible={isVisible}
        filteredTodos={filteredTodos}
        toggleTodo={toggleTodo}
      />
      <Filters
        filter={filter}
        filterHandler={filterHandler}
        clearCompletedHandler={clearCompleted}
        disabled={completedTodosNumber === 0}
        activeTodosNumber={activeTodosNumber}
      />
    </main>
  );
};
