import { render, screen, fireEvent } from '@testing-library/react';
import { Main } from './Main.tsx';

describe('Main', () => {
  it('renders todo item if ENTER is clicked', () => {
    render(<Main />);

    const input = screen.getByPlaceholderText('What needs to be done?');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const todoItem = screen.getByText('Test todo');
    expect(todoItem).toBeInTheDocument();

    expect(screen.getByText('1 item left')).toBeInTheDocument();
  });

  it('click on checkbox to make it completed', () => {
    render(<Main />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });

  it('shouldnt add empty string', () => {
    render(<Main />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });

  test('toggle dropdown to collapse list', () => {
    render(<Main />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const toggleButton = screen.getByText('▼');
    fireEvent.click(toggleButton);

    const outputElement = screen.queryByRole('list');
    expect(outputElement).toHaveClass('opacity-0');
  });

  test('click on clear completed button', () => {
    render(<Main />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const clearCompletedBtn = screen.getByText('Clear completed');
    fireEvent.click(clearCompletedBtn);

    const listItemsLength = screen.queryAllByRole('listitem');
    expect(listItemsLength).toHaveLength(0);
  });
});
