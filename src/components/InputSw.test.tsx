import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { InputSw } from './InputSw';

test('Check on click handle', async () => {
  const handleClick = jest.fn();
  render(
    <button onClick={handleClick} type="button">
      ClickMe
    </button>
  );

  const button = screen.getByRole('button', { name: 'ClickMe' });

  await fireEvent.click(button);

  await expect(button).toBeInTheDocument();
  await expect(handleClick).toHaveBeenCalled();
});
