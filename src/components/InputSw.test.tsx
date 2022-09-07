import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputSw } from './InputSw';

test('Check on click handle', () => {
  const handleClick = jest.fn();
  render(
    <button onClick={handleClick} type="button">
      ClickMe
    </button>
  );

  const button = screen.getByRole('button', { name: 'ClickMe' });
  // screen.debug();
  // screen.getByRole('');

  fireEvent.click(button);

  expect(button).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalled();
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Check', () => {
  // const handleClick = jest.fn();
  const handleClick = jest.fn(() => true);

  render(<InputSw />);
  // const spy = jest.spyOn(console, 'log');
  const spy = jest.spyOn(console, 'log');

  const button = screen.getByRole('button', { name: 'ClickMe' });
  // console.debug(button);
  // screen.debug();
  // screen.getByRole('');

  fireEvent.click(button);

  expect(button).toBeInTheDocument();
  expect(spy).toBeCalled();
  // expect(handleClick).toBeCalled();
  expect(handleClick).toBeTruthy();
  // expect(handleClick).toHaveBeenCalledTimes(1);
});
