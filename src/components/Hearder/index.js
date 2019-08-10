import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Hearder() {
  return (
    <Container>
      <Link to="/">
        <h1>Movies</h1>
      </Link>
    </Container>
  );
}
