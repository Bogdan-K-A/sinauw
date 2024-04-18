import styled from 'styled-components';
import { Link } from 'react-scroll';

import Logo from '../../assets/img/logo.png';

export const StyledLogo = styled(Link)`
  /* display: inline-block; */
  width: ${({ width }) => (width ? '141px' : '82px')};
  height: ${({ height }) => (height ? '80px' : '40px')};

  /* background-image: url(${Logo});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat; */

  cursor: pointer;
`;
