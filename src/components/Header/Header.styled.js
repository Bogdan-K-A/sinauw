import styled from 'styled-components';

export const StiledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 18px 0;
  width: 100%;
  height: 80px;
  background: ${({ scroll }) =>
    scroll >= 80
      ? 'var(--section-with-stutud-in-section-hero-bg-color)'
      : null};

  z-index: 99;

  > a {
    margin-right: 150px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LenguageSwichWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;

  @media (max-width: 575.98px) {
    margin-right: 5px;
  }
`;

export const LenguageSwichText = styled.p`
  margin-right: 4px;
`;

export const LengDropMenu = styled.ul`
  position: absolute;
  top: 80%;
  right: 13px;
  width: 22px;
  z-index: 999;

  > li {
    cursor: pointer;
    transition: all 0.25s ease-out;

    &:hover,
    :focus {
      font-weight: var(--fw-bold);
    }
  }
`;

export const BurgerBoxMenu = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 34px;
    height: 34px;
  }

  @media (min-width: 991px) {
    display: none;
  }
`;

export const NavBox = styled.div`
  display: none;
  @media (min-width: 991px) {
    display: block;
  }
`;
