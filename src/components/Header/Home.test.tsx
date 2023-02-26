import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Home component', () => {
  render( <Header/>);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
