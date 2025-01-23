import { forwardRef, RefObject } from 'react';

type Props = {
  type: string;
  keyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => boolean | void;
  ref: RefObject<HTMLInputElement>;
  clickHandler: () => void;
  isVisible: boolean;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ isVisible, clickHandler, keyDownHandler, type }, ref) => {
    let buttonClasses = 'flex mx-3 items-center text-amber-700 transition-all';
    if (!isVisible) {
      buttonClasses += ' -rotate-90';
    }

    return (
      <div className="flex justify-center w-full">
        <button onClick={clickHandler} className={buttonClasses}>
          ▼
        </button>
        <input
          ref={ref}
          placeholder="What needs to be done?"
          onKeyDown={keyDownHandler}
          className="w-full px-3 py-2 leading-tight border rounded shadow text-gray-700 bg-stone-300"
          type={type}
        />
      </div>
    );
  }
);
