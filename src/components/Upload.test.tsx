import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FileUploadDemo } from './Uploader';

test('FileUpload should be on title', () => {
  render(<FileUploadDemo />);

  const title = screen.getByText('FileUpload');

  expect(title).toBeInTheDocument();
});
