import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 65px 0;
  text-align: center;
`;

export const TitleWrapper = styled.div`
  text-align: center;

  > h2 {
    margin-bottom: 20px;
    font-weight: var(--fw-semiBold);
    font-size: var(--fs-lg);
  }

  > p {
    font-size: var(--fs-nm);
    color: var(--secondary-text-color);
  }

  @media screen and (max-width: 575.98px) {
    > h2 {
      font-size: 26px;
    }
  }
`;

export const ClassesList = styled.ul`
  margin: 84px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 30px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 30px;
  }

  @media screen and (max-width: 575.98px) {
    margin: 44px auto 84px auto;
  }
`;

export const Article = styled.article`
  position: relative;
  width: 280px;
  padding-top: 12px;
  padding-bottom: 20px;
  padding-left: 12px;
  padding-right: 12px;
  background: var(--card-bg-color);
  border-radius: var(--br-card);
  border: 3px solid var(--card-separator-line-color);

  &:hover {
    border-bottom: none;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const BtnWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  right: -3px;
  width: 280px;
  padding-top: 12px;
  padding-bottom: 20px;
  padding-left: 12px;
  padding-right: 12px;
  background: var(--card-bg-btn-color);
  border-bottom-right-radius: var(--br-card);
  border-bottom-left-radius: var(--br-card);
  border-bottom: 3px solid var(--card-separator-line-color);
  border-right: 3px solid var(--card-separator-line-color);
  border-left: 3px solid var(--card-separator-line-color);
  transform: translateY(0);

  z-index: 5;

  ${Article}:hover & {
    display: block;

    transform: translateY(100%);
  }
`;

export const Thumb = styled.div`
  position: relative;
  margin-bottom: 24px;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(30, 32, 67, 0.3);
  }

  img {
    width: 252px;
    height: 169px;
    border-radius: var(--br-img-in-card);
  }
`;

export const LinckAtVideo = styled.div`
  position: absolute;
  bottom: 6%;
  left: 5%;
  background: var(--card-frame-color);
  border-radius: var(--br-md);
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;

  a {
    font-size: 12px;
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CategoryName = styled.p`
  font-weight: var(--fw-medium);
  font-size: 12px;
  margin-bottom: 10px;
  color: var(--card-text-category-color);
`;

export const CardTitle = styled.h3`
  font-weight: var(--fw-semiBold);
  font-size: var(--fs-nm);
  margin-bottom: 12px;
  color: var(--primary-text-color);
`;

export const CardText = styled.p`
  margin-bottom: 20px;
  text-align: left;
  color: var(--secondary-text-color);
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: var(--card-separator-line-color);
  margin-bottom: 20px;
`;

export const MentorNameWrapper = styled.div`
  display: flex;

  img {
    border-radius: 50%;
    margin-right: 15px;
  }
`;

export const NameMentor = styled.p`
  font-weight: var(--fw-medium);
  margin-bottom: 3px;
`;

export const PlaceMentor = styled.p`
  font-size: 12px;

  color: var(--secondary-text-color);
`;
