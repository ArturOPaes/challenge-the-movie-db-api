import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import api from '~/services/api';
import {
  searchSuccess,
  searchFailure,
  genreSuccess,
  genreFailure,
} from './actions';

export function* genre() {
  try {
    const response = yield call(api.get, '/genre/movie/list', {
      params: {
        api_key: 'ea23de8ec804b733fb23d82d0df85c0c',
        language: 'pt-BR',
      },
    });

    yield put(genreSuccess(response.data.genres));
  } catch (err) {
    toast.error(
      'Falha na chamada da API, verifique se o limite de requisões não foi ultrapassado.'
    );
    yield put(genreFailure());
  }
}

export function* search({ payload }) {
  try {
    const { query, page, lastQuery } = payload;

    const q = query || lastQuery;

    const response = yield call(api.get, '/search/movie', {
      params: {
        query: q,
        page,
        api_key: 'ea23de8ec804b733fb23d82d0df85c0c',
        language: 'pt-BR',
      },
    });

    // dados da API estavam vindo com data quebrada e caindo no catch e estragando a paginação.
    response.data.results.map(r => {
      r.release_date = r.release_date
        ? format(new Date(r.release_date), 'dd/MM/yyyy')
        : '';
      return r;
    });

    const { results, total_pages } = response.data;

    yield put(searchSuccess(results, page, total_pages, q));
  } catch (err) {
    console.log(err);
    toast.error(err);
    yield put(searchFailure());
  }
}

export default all([
  takeLatest('@movie/SEARCH_REQUEST', search),
  takeLatest('@movie/GENRE_REQUEST', genre),
]);
