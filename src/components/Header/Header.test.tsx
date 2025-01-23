import { render, screen } from '@testing-library/react';
import { Header } from './Header.tsx';

describe('Header', () => {
  it('renders headline TODOS', () => {
    render(<Header />);

    const headline = screen.getByText(/todos/i);

    expect(headline).toBeInTheDocument();
  });
});
