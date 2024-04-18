import styled from 'styled-components';

export const StiledSection = styled.section`
  padding: 102px 0;

  @media (max-width: 575.98px) {
    padding: 30px 0;
  }
`;

export const FeaturedList = styled.ul`
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

export const FeaturedListItem = styled.li`
  display: flex;

  img {
    width: 65px;
    height: 65px;
    margin-right: 18px;
  }

  @media (max-width: 575.98px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 311px;

  > h2 {
    padding-top: 17px;
    margin-bottom: 23px;
    font-weight: var(--fw-semiBold);
    font-size: 20px;
    line-height: var(--lh-md);
    color: var(--primary-text-color);
  }

  > p {
    font-weight: 400;
    font-size: var(--fs-sm);
    line-height: var(--lh-nm);
    color: var(--primary-text-color);
  }
  @media (max-width: 575.98px) {
    width: 100%;
  }
`;
