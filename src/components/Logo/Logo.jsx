import React from 'react';
import { StyledLogo } from './Logo.styled';
import logo from '../../assets/img/logo.png';

export const Logo = props => {
  return (
    <StyledLogo {...props}>
      <img src={logo} alt="" />
    </StyledLogo>
  );
};
