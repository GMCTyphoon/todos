import { Button } from '../UI/Button';

type Props = {
  showAllHandler: () => void;
  showActiveHandler: () => void;
  showCompletedHandler: () => void;
  clearCompletedHandler: () => void;
  disabled: boolean;
  filter: string;
  activeTodos: number;
};

export const Filters: React.FC<Props> = ({
  showAllHandler,
  showActiveHandler,
  showCompletedHandler,
  clearCompletedHandler,
  disabled,
  filter,
  activeTodos,
}) => {
  return (
    <div className="flex justify-between items-center px-2">
      <span className="text-gray-700">
        {activeTodos} item{activeTodos > 1 && 's'} left
      </span>
      <div className="flex gap-1">
        <Button
          onClick={showAllHandler}
          disabled={filter === 'all'}
          active={filter === 'all'}
        >
          All
        </Button>
        <Button
          onClick={showActiveHandler}
          disabled={filter === 'active'}
          active={filter === 'active'}
        >
          Active
        </Button>
        <Button
          onClick={showCompletedHandler}
          disabled={filter === 'completed'}
          active={filter === 'completed'}
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
