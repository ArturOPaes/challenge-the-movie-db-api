import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  page: 1,
  totalPages: 1,
  movies: [],
  genres: [],
  lastQuery: '',
};

export default function movie(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@movie/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@movie/SEARCH_SUCCESS': {
        draft.movies = action.payload.result;
        draft.page = action.payload.page;
        draft.totalPages = action.payload.total_pages;
        draft.lastQuery = action.payload.q;
        draft.loading = false;
        break;
      }
      case '@movie/SEARCH_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@movie/GENRE_REQUEST': {
        break;
      }
      case '@movie/GENRE_SUCCESS': {
        draft.genres = action.payload.data;
        break;
      }
      case '@movie/GENRE_FAILURE': {
        break;
      }
      default:
    }
  });
}
