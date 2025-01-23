import { Button } from '../../UI/Button';
import { Filter, FiltersProps } from './types';

export const Filters: React.FC<FiltersProps> = ({
  filterHandler,
  clearCompletedHandler,
  disabled,
  filter,
  activeTodosNumber,
}) => {
  return (
    <div className="flex justify-between items-center px-2">
      <span className="text-gray-700">
        {activeTodosNumber} item{activeTodosNumber !== 1 && 's'} left
      </span>
      <div className="flex gap-1">
        <Button
          onClick={() => {
            filterHandler(Filter.all);
          }}
          disabled={filter === Filter.all}
          active={filter === Filter.all}
        >
          All
        </Button>
        <Button
          onClick={() => {
            filterHandler(Filter.active);
          }}
          disabled={filter === Filter.active}
          active={filter === Filter.active}
        >
          Active
        </Button>
        <Button
          onClick={() => {
            filterHandler(Filter.completed);
          }}
          disabled={filter === Filter.completed}
          active={filter === Filter.completed}
        >
          Completed
        </Button>
      </div>
      <Button
        onClick={clearCompletedHandler}
        disabled={disabled}
        active={false}
      >
        Clear completed
      </Button>
    </div>
  );
};
