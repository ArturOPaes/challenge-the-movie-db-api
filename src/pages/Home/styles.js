import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  margin-top: 170px;
  padding: 0 30px;

  display: flex;
  flex-direction: column;

  > input {
    flex-grow: 1;
    border: none;
    border-radius: 30px;
    padding: 15px 40px;
    color: #a0bccc;
    background: #ebebeb;
    font-size: 22px;
    font-family: abel, sans-serif;

    ::placeholder {
      color: #a0bccc;
    }
  }

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;

    li {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Card = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 30px 0;
  display: inline-block;
  background: #eee;
  display: flex;

  > img {
    margin: 0;
    padding: 0;
    width: 250px;
  }

  > div {
    width: 100%;
    position: relative;
    max-height: 83px;
    > h1 {
      background: #116193;
      color: #00e8e4;
      font-family: abel, sans-serif;
      font-size: 45px;
      font-weight: 300;
      line-height: 30px;
      padding: 2.5rem 2.5rem 0.8rem 8rem;
      max-height: 83px;

      /*
      @media (max-width: 768px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      */
    }

    > span {
      font-family: lato, sans-serif;
      padding: 3rem 2.5rem 0.2rem 8rem;
      font-size: 24px;
      color: #b8b8b8;
    }

    > p {
      font-family: lato, sans-serif;
      font-size: 20px;
      padding: 2.5rem 2.5rem 0.2rem 2.5rem;
      color: #949494;
      font-weight: bold;
    }
  }
`;

export const OuterRing = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  height: 85px;
  width: 85px;
  background: #00e8e4;
  border-radius: 300px;
  font-family: abel, sans-serif;
  font-size: 20px;
  color: white;
  border: 3px solid #116193;
  z-index: 2;

  > span {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    color: inherit;
    font-size: 30px;
    color: #00e8e4;
    background: #00e8e4;

    ::after {
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
      border-radius: 300px;
      background: #116193;
      z-index: -1;
    }
  }
`;

export const Loading = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Genres = styled.div`
  padding-left: 40px;
  padding-top: 20px;
  > span {
    display: inline-block;
    padding: 2px 10px;
    margin-right: 10px;
    font-size: 18px;
    background: #fafafa;
    color: #116193;
    border: solid 1px;
    font-weight: 500;
    border-radius: 30px;
    font-family: abel, sans-serif;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;

export const Page = styled.div`
  display: inline-flex;
  width: 60px;
  height: 60px;
  color: #116193;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 100px;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 25px;
  font-family: abel, sans-serif;

  ${props =>
    props.isActive &&
    css`
      border: 3px solid #116193;
      color: #00e8e4;
      background: #00e8e4;
      position: relative;
      font-size: 30px;
      font-family: abel, sans-serif;
      z-index: 2;

      ::after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
        border-radius: 300px;
        background: #116193;
        z-index: -1;
      }
    `}
`;
