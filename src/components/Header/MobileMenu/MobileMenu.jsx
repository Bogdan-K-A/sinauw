import { NavBar } from 'components/NavBar';
import { StyledBurgerBody } from './MobileMenu.styled';

const MobileMenu = ({ onClick }) => {
  return (
    <StyledBurgerBody>
      <NavBar onClick={onClick} />
    </StyledBurgerBody>
  );
};

export default MobileMenu;
