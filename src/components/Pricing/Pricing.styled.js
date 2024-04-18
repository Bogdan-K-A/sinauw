import styled from 'styled-components';
import popular from '../../assets/img/icons/pricingIcon/popular.svg';

export const Section = styled.section`
  padding: 84px 0 115px 0;
  text-align: center;

  @media (max-width: 575.98px) {
    padding: 15px 0 44px 0;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 36px;

  @media (max-width: 575.98px) {
    font-size: 26px;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  margin-bottom: 84px;
  font-size: 18px;
  color: var(--secondary-text-color);

  @media (max-width: 575.98px) {
    margin-bottom: 44px;
  }
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 30px;
  }
`;

export const Card = styled.div`
  position: ${({ position }) => (position ? 'relative' : null)};
  display: flex;
  flex-direction: column;
  padding: 36px;
  width: 372px;
  height: 515px;
  background: var(--card-bg-color);
  border-radius: var(--br-card);
  border: 3px solid var(--card-separator-line-color);

  ul {
    text-align: left;

    li:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 575.98px) {
    li p {
      font-size: 12px;
    }
    align-items: center;
    width: 100%;
    height: auto;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 29px;

  img {
    margin-right: 30px;
  }
`;

export const WrapperNameCours = styled.div`
  text-align: left;

  > h3 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }

  > p {
    font-weight: 500;
    font-size: 12px;
  }

  span {
    sup {
      font-size: 18px;
      margin-right: 3px;
    }

    font-weight: 700;
    font-size: 28px;
    color: #f5453d;
    margin-right: 4px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: var(--card-separator-line-color);
  margin-bottom: 29px;
`;

export const Point = styled.span`
  display: inline-block;
  height: 13px;
  width: 13px;
  background-color: #9799ce;
  border-radius: var(--br-circle);
  margin-right: 12px;
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
`;

export const IconPopular = styled.div`
  position: absolute;
  top: -3px;
  right: -3px;
  width: 88px;
  height: 76px;
  background-image: url(${popular});
  background-repeat: no-repeat;
  background-position: 0% 0px;
  background-size: cover;
  border-top-right-radius: var(--br-card);
  z-index: 99;
`;
