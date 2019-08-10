import reducer, { INITIAL_STATE } from '~/store/modules/movie/reducer';
import * as Movies from '~/store/modules/movie/actions';

describe('Movies reducer', () => {
  it('@movie/SEARCH_REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      Movies.searchRequest('tecnologia', 1, '')
    );

    expect(state).toStrictEqual({
      genres: [],
      lastQuery: '',
      loading: true,
      movies: [],
      page: 1,
      totalPages: 1,
    });
  });
});
