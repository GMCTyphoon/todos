import { RefObject } from 'react';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export interface TodoItemProps extends Todo {
  toggleTodo: (id: Todo['id']) => void;
}

export enum Filter {
  all = 'all',
  active = 'active',
  completed = 'completed',
}

export interface FiltersProps {
  filterHandler: (filterType: Filter) => void;
  clearCompletedHandler: () => void;
  disabled: boolean;
  filter: Filter;
  activeTodosNumber: number;
}

export interface InputProps {
  type: string;
  keyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => boolean | void;
  ref: RefObject<HTMLInputElement>;
  toggleVisible: () => void;
  isVisible: boolean;
}

export interface TodoListProps {
  isVisible: boolean;
  filteredTodos: Todo[];
  toggleTodo: TodoItemProps['toggleTodo'];
}
