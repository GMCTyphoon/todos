import { useRef, useState } from 'react';
import { Filters } from './Filters';
import { Input } from './Input';
import { TodoItem } from './TodoItem';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
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

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const activeTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.length - activeTodos;

  let listClasses =
    'divide-y divide-orange-500 overflow-y-auto p-2 transition-all duration-500';
  if (isVisible) {
    listClasses += ' max-h-96';
  } else {
    listClasses += ' max-h-0 opacity-0';
  }

  return (
    <>
      <Input
        isVisible={isVisible}
        type="text"
        ref={inputRef}
        keyDownHandler={(e) => e.key === 'Enter' && addTodo()}
        clickHandler={() => setIsVisible((prev) => !prev)}
      />
      <ul className={listClasses}>
        {filteredTodos.map((a) => (
          <TodoItem
            key={a.id}
            text={a.text}
            id={a.id}
            completed={a.completed}
            toggleTodo={() => toggleTodo(a.id)}
          />
        ))}
      </ul>
      <Filters
        filter={filter}
        showAllHandler={() => {
          setFilter('all');
        }}
        showActiveHandler={() => {
          setFilter('active');
        }}
        showCompletedHandler={() => {
          setFilter('completed');
        }}
        clearCompletedHandler={() => {
          clearCompleted();
        }}
        disabled={completedTodos === 0}
        activeTodos={activeTodos}
      />
    </>
  );
};
