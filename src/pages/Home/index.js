import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Hearder';

import {
  Container,
  Card,
  Loading,
  Genres,
  OuterRing,
  Pagination,
  Page,
} from './styles';

import { searchRequest, genreRequest } from '~/store/modules/movie/actions';

export default function Home() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const movies = useSelector(state => state.movie.movies);
  const page = useSelector(state => state.movie.page);
  const totalPages = useSelector(state => state.movie.totalPages);
  const loading = useSelector(state => state.movie.loading);
  const genres = useSelector(state => state.movie.genres);
  const lastQuery = useSelector(state => state.movie.lastQuery);

  useEffect(() => {
    async function loadSearch() {
      if (query !== '') {
        dispatch(searchRequest(query, 1, ''));
      }
    }
    loadSearch();
  }, [dispatch, query]);

  useEffect(() => {
    async function loadGenres() {
      dispatch(genreRequest());
    }
    loadGenres();
  }, [dispatch]);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setQuery(e.target.value);
    }
  }

  function handleClick(number) {
    dispatch(searchRequest(query, number, lastQuery));
  }

  return (
    <>
      <Header />
      <Container>
        <input
          name="query"
          placeholder="Busque um filme por nome, ano ou gênero..."
          onKeyDown={handleKeyDown}
          data-testId="search"
        />

        {loading ? (
          <Loading>Carregando</Loading>
        ) : (
            <>
              <ul data-testId="movie-list">
                {movies.map(movie => (
                  <li key={movie.id}>
                    <Card to={`filme/${movie.id}`}>
                      {movie.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt=""
                        />
                      ) : (
                          ''
                        )}
                      <div>
                        <h1 title={movie.title}>
                          {String(movie.title).length > 35
                            ? `${movie.title.substring(0, 35)}...`
                            : movie.title}
                        </h1>
                        <OuterRing>
                          <span>{movie.vote_average * 10}%</span>
                        </OuterRing>
                        <span>{movie.release_date}</span>
                        <p>
                          {String(movie.overview).length > 200
                            ? `${movie.overview.substring(0, 200)}...`
                            : movie.overview}
                        </p>
                        <Genres>
                          {movie.genre_ids.map(genre =>
                            genres.map(g =>
                              genre === g.id ? (
                                <span key={g.id}>{g.name}</span>
                              ) : (
                                  ''
                                )
                            )
                          )}
                        </Genres>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
              {movies.length > 0 ? (
                <Pagination>
                  {[...Array(totalPages).keys()]
                    .map(x => x + 1)
                    .map(number => (
                      <Page
                        key={number}
                        isActive={page === number}
                        onClick={() => handleClick(number)}
                      >
                        {number}
                      </Page>
                    ))}
                </Pagination>
              ) : (
                  ''
                )}
            </>
          )}
      </Container>
    </>
  );
}
