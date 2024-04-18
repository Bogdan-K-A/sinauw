import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  padding: 12px 0;
`;

export const NavList = styled.ul`
  display: flex;
  @media (max-width: 991px) {
    display: ${({ display }) => display || ''};
    flex-direction: column;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 45px;
  }

  @media (max-width: 991px) {
    & {
      margin-right: 0 !important;
      margin-bottom: 50px !important;
      font-size: 36px;
    }
  }

  > a {
    position: relative;
    transition: all 0.25s ease-out;
    &:hover,
    &:focus {
      color: white;
    }
  }

  .active {
    color: white;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: -1px;
      left: 0;
      border-radius: 2px;
      background-color: var(--primary-text-color);
    }
  }
`;

export const NavLinck = styled(Link)`
  padding: 12px 0;
  cursor: pointer;
`;
