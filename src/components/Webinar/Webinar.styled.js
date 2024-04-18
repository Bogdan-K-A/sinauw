import styled from 'styled-components';
import movies from '../../assets/img/movies.png';

export const Section = styled.section`
  padding: 109px 0 84px 0;
  text-align: center;

  @media (max-width: 575.98px) {
    padding: 15px 0 24px 0;
  }
`;

export const Title = styled.h2`
  font-size: var(--fs-lg);
  margin-bottom: 20px;

  @media (max-width: 575.98px) {
    font-size: 26px;
  }
`;

export const Text = styled.p`
  margin-bottom: 105px;
  font-size: var(--fs-nm);
  color: var(--secondary-text-color);

  @media (max-width: 575.98px) {
    margin-bottom: 20px;
  }
`;

export const MoviesContainer = styled.div`
  /* width: 1200px; */
  height: 425px;
  background: url(${movies}) no-repeat center/contain;
  margin: 0 auto 56px auto;

  @media (max-width: 575.98px) {
    height: 225px;
    margin: 0 auto;
  }

  /* @media screen and (max-width: 1200px) {
    width: 800px;
  } */
`;

export const Linck = styled.a`
  display: flex;
  font-weight: var(--fw-medium);
  color: #d1d1d7;

  &:hover {
    text-shadow: var(--text-shadow);
  }

  svg {
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
`;

export const LinckWrapper = styled.div`
  width: 201px;

  margin-left: auto;
`;
