import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { searchRequest } from '~/store/modules/movie/actions';
import Home from '~/pages/Home';

jest.mock('react-redux');

/**
 * Teste não funcionando por erro ainda desconhecido no router-dom.
 * Estava dando um warning e pedindo para atualizar para uma versão mais recentes, após isso
 * ocorreu esse erro, mesmo voltando para a versão anterior.
 */
describe('Home page', () => {
  it('should render movie list', () => {
    useSelector.mockImplementation(cb =>
      cb({
        movie: {
          movies: [
            {
              id: 123,
              title: 'Tecnologia em recife',
              poster_path: '/2lJWTjVKJMxYinA5YNJo9R5YZ7E.jpg',
              vote_average: 8,
              release_date: '09/08/2019',
              overview:
                'Documentário sobre as empresas de tecnologia em recfie',
              genre_ids: [1],
            },
          ],
          genres: [
            {
              id: 1,
              name: 'documentário',
            },
          ],
        },
      })
    );

    const { getByTestId, getByText, debug } = render(<Home />);
    debug();
    expect(getByTestId('movie-list')).toContainElement(
      getByText('Tecnologia em recife')
    );
    debug();
    expect(getByTestId('movie-list')).toContainElement(getByText('09/08/2019'));
  });

  it('should be able to search', () => {
    const { getByTestId, getByText } = render(<Home />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByTestId('Search'), { target: { value: 'Thor' } });

    fireEvent.keyDown(getByText('Search'), { key: 'Enter', code: 13 });

    expect(dispatch).toBeCalled();
    expect(dispatch).toHaveBeenCalledWith(searchRequest('tecnologia', 1, ''));
  });
});
