import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('clicking button increments number by 1', () => {
  render(<App />);

  const button = screen.getByRole('button');
  fireEvent.click(button);

  // this should pass
  const clickValue = screen.getByText('Click Me: 1');
  expect(clickValue).toBeInTheDocument();

  // this should fail
  const incorrectValue = screen.getByText('Click Me: 99');
  expect(incorrectValue).toBeInTheDocument();
});
