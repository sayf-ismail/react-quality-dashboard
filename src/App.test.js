import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coming soon text', () => {
  render(<App />);
  const h1element = screen.getByText(/What\'s up, Coming Soon/i);
  expect(h1element).toBeInTheDocument();
});
