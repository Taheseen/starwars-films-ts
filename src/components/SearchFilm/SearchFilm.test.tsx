import { render, screen } from '@testing-library/react';
import SearchFilm from './SearchFilm';

test('renders SerachFilm component', () => {
  render( <SearchFilm/>);
 // expect(screen.getByDisplayValue('input')).toBeInTheDocument();
});
