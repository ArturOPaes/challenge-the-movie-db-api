export function searchRequest(query, page, lastQuery) {
  return {
    type: '@movie/SEARCH_REQUEST',
    payload: { query, page, lastQuery },
  };
}

export function searchSuccess(result, page, total_pages, q) {
  return {
    type: '@movie/SEARCH_SUCCESS',
    payload: { result, page, total_pages, q },
  };
}

export function searchFailure() {
  return {
    type: '@movie/SEARCH_FAILURE',
  };
}

export function genreRequest() {
  return {
    type: '@movie/GENRE_REQUEST',
  };
}

export function genreSuccess(data) {
  return {
    type: '@movie/GENRE_SUCCESS',
    payload: { data },
  };
}

export function genreFailure() {
  return {
    type: '@movie/GENRE_FAILURE',
  };
}
