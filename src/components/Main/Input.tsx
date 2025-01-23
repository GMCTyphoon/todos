import { forwardRef } from 'react';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isVisible, toggleVisible, keyDownHandler, type }, ref) => {
    let buttonClasses = 'flex mx-3 items-center text-amber-700 transition-all';
    if (!isVisible) {
      buttonClasses += ' -rotate-90';
    }

    return (
      <div className="flex justify-center w-full">
        <button onClick={() => toggleVisible()} className={buttonClasses}>
          ▼
        </button>
        <input
          id="todo"
          ref={ref}
          placeholder="What needs to be done?"
          onKeyDown={(e) => keyDownHandler(e)}
          className="w-full px-3 py-2 leading-tight border rounded shadow text-gray-700 bg-stone-300"
          type={type}
        />
      </div>
    );
  }
);
