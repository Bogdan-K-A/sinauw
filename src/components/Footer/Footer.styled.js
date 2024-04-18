import styled from 'styled-components';

export const StiledSection = styled.footer`
  padding: 48px 0 30px 0;
`;
export const Flex = styled.div`
  display: flex;
  margin-bottom: 86px;

  @media screen and (max-width: 1199.98px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0;
  margin-left: auto;
  justify-items: center;

  @media screen and (max-width: 1199.98px) {
    margin-left: 0;
  }

  @media screen and (max-width: 991.98px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2fr;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  }
`;

export const LogoWrapper = styled.div`
  width: 241px;

  > p {
    margin-bottom: 24px;
    font-size: var(--fs-md);
    line-height: var(--lh-nm);
    opacity: 0.6;
  }

  @media screen and (max-width: 1199.98px) {
    margin-bottom: 40px;
  }
`;

export const FooterListMenu = styled.ul`
  /* margin-right: ${({ marginRight }) => (marginRight ? '81px' : 0)}; */
  font-size: 20px;
  line-height: var(--lh-sm1);
  color: var(--primary-text-color);

  > li {
    transition: all 0.25s ease-out;

    > a {
      cursor: pointer;
    }
  }

  > li:not(:last-child) {
    margin-bottom: 24px;
  }

  > li:not(:first-child) {
    opacity: 0.6;
  }

  > li:hover,
  > li:focus {
    opacity: 1;
  }

  > h3 {
    margin-bottom: 24px;
    font-weight: var(--fw-bold);
    font-size: 20px;
    line-height: var(--lh-sm1);
    color: var(--primary-text-color);
  }

  @media (max-width: 575.98px) {
    font-size: 14px;
  }
`;

export const BottomCaption = styled.div`
  text-align: center;

  p {
    font-size: var(--fs-md);
    line-height: var(--lh-sm1);
    color: var(--footer-bottom-text-color);
  }
`;

export const StyledSocialList = styled.ul`
  display: flex;

  > li {
    transition: all 0.25s ease-out;
  }

  > li:not(:last-child) {
    margin-right: 32px;
  }

  > li:hover {
    color: var(--white-color);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
