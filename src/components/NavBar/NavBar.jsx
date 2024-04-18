import { useTranslation } from 'react-i18next';

//StyledComponent
import { Nav, NavItem, NavLinck, NavList } from './NavBar.styled';

export const NavBar = ({ display, onClick }) => {
  const { t } = useTranslation();

  return (
    <Nav>
      <NavList display={display}>
        <NavItem>
          <NavLinck
            active="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={onClick}
          >
            {t('header.home')}
          </NavLinck>
        </NavItem>
        <NavItem>
          <NavLinck
            active="active"
            to="courses"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            onClick={onClick}
          >
            {t('header.courses')}
          </NavLinck>
        </NavItem>
        <NavItem>
          <NavLinck
            active="active"
            to="webinar"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            onClick={onClick}
          >
            {t('header.webinar')}
          </NavLinck>
        </NavItem>
        <NavItem>
          <NavLinck
            active="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            onClick={onClick}
          >
            {t('header.pricing')}
          </NavLinck>
        </NavItem>
      </NavList>
    </Nav>
  );
};
