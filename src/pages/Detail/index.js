import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from '~/services/api';

import Header from '~/components/Hearder';

import {
  Container,
  Card,
  Loading,
  Subtitle,
  Info,
  Genres,
  OuterRing,
  CardHeader,
  CardBody,
} from './styles';

export default function Detail({ match }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMovie() {
      setLoading(true);
      const { id } = match.params;

      const response = await api.get(`/movie/${id}`, {
        params: {
          api_key: 'ea23de8ec804b733fb23d82d0df85c0c',
          language: 'pt-BR',
        },
      });

      response.data.release_date = format(
        new Date(response.data.release_date),
        'dd/MM/yyyy'
      );

      setMovie(response.data);
      setLoading(false);
    }
    loadMovie();
  }, [match.params]);

  function formatCurrency(value) {
    if (value) {
      const number = value.toFixed(2).split('.');
      number[0] = `$${number[0].split(/(?=(?:...)*$)/).join(',')}`;
      return number.join('.');
    }
    return '';
  }

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Loading>Carregando</Loading>
        ) : (
          <Card>
            <CardHeader>
              <h1>{movie.title}</h1>
              {movie.release_date}
            </CardHeader>
            <CardBody>
              <div>
                <Subtitle>Sinopse</Subtitle>
                <p>{movie.overview}</p>
                <Subtitle>Informações</Subtitle>
                <Info>
                  <div>
                    <h4>Situação</h4>
                    {movie.status}
                  </div>
                  <div>
                    <h4>Idioma</h4>
                    {movie.spoken_languages
                      ? movie.spoken_languages.map(lan => (
                          <span key={lan.name}>
                            {lan.name} {'  '}
                          </span>
                        ))
                      : ''}
                  </div>
                  <div>
                    <h4>Duração</h4>
                    {Math.floor(Number(movie.runtime) / 60)}h{' '}
                    {Math.floor((movie.runtime %= 3600 / 60))}
                    min
                  </div>
                  <div>
                    <h4>Orçamento</h4>
                    {formatCurrency(movie.budget)}
                  </div>
                  <div>
                    <h4>Receita</h4>
                    {formatCurrency(movie.revenue)}
                  </div>
                  <div>
                    <h4>Lucro</h4>
                    {formatCurrency(movie.revenue - movie.budget)}
                  </div>
                </Info>
                <Genres>
                  {movie.genres
                    ? movie.genres.map(genre => (
                        <span key={genre.id}>{genre.name}</span>
                      ))
                    : ''}
                </Genres>
                <OuterRing>
                  <span>{movie.vote_average * 10}%</span>
                </OuterRing>
              </div>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt=""
                />
              ) : (
                ''
              )}
            </CardBody>
          </Card>
        )}
      </Container>
    </>
  );
}
