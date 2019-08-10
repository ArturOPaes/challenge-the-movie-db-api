import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { searchSuccess, searchFailure } from '~/store/modules/movie/actions';
import { search } from '~/store/modules/movie/sagas';

const apiMock = new MockAdapter(api);

describe('Movie saga', () => {
  it('should be able to fetch movies', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/search/movie').reply(200, []);

    await runSaga({ dispatch }, search, ('tecnologia', 1, '')).toPromise();

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(searchSuccess([]));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/search/movie').reply(500);

    await runSaga({ dispatch }, search, ('tecnologia', 1, '')).toPromise();

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(searchFailure());
  });
});
