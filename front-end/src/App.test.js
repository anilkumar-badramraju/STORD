import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Generate SHorten button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Generate short url/i);
  expect(linkElement).toBeInTheDocument();
});
