import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  margin-top: 170px;

  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  background: #f2f2f2;
`;

export const CardHeader = styled.div`
  background: #e6e6e6;
  padding: 20px 40px;
  color: #c1c1c1;
  display: flex;
  font-size: 20px;
  align-items: center;
  font-family: abel, sans-serif;
  > h1 {
    font-family: abel, sans-serif;
    color: #116193;
    flex-grow: 1;
  }
`;

export const CardBody = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  > div {
    padding: 2.5rem;
    justify-content: space-between;
    position: relative;

    > p {
      font-family: lato, sans-serif;
    }
  }
`;

export const OuterRing = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  height: 100px;
  width: 100px;
  background: #00e8e4;
  border-radius: 300px;
  font-family: abel, sans-serif;
  font-size: 28px;
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
    font-size: 40px;
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
  padding-left: 20px;
  padding-top: 40px;
  min-height: 150px;
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

export const Subtitle = styled.div`
  position: relative;
  margin: 30px 0;

  font-size: 20px;
  font-family: abel, sans-serif;
  color: #116193;

  ::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -10px;
    background: #00e8e4;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  text-align: center;
  font-family: abel, sans-serif;

  > div {
    padding: 5px;
    flex-grow: 1;

    > h4 {
      font-size: 20px;
      font-family: abel, sans-serif;
      color: #116193;
    }
  }
`;
