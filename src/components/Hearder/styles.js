import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  background: #116193;
  width: 100%;
  font-family: abel, sans-serif;
  height: 100px;
  font-size: 25px;
  top: 0;
  z-index: 9999;

  > a > h1 {
    color: #02d5d8;
    font-weight: 300;
  }
`;
