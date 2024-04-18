import { NavBar } from '../../NavBar/NavBar';
import { StyledBurgerBody } from './MobileMenu.styled';

const MobileMenu = ({ onClick }) => {
  return (
    <StyledBurgerBody>
      <NavBar onClick={onClick} />
    </StyledBurgerBody>
  );
};

export default MobileMenu;
