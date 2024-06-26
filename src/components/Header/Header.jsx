import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TbWorld } from 'react-icons/tb';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { IoIosMenu } from 'react-icons/io';
import { useToggle } from '../../hooks/useToggle';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { Button } from '../Button';
import { Modal } from '../Modal';
import Form from '../Form/Form';
import { Container } from '../Container';
import MobileMenu from './MobileMenu/MobileMenu';
import {
  Flex,
  StiledHeader,
  LenguageSwichWrapper,
  LenguageSwichText,
  LengDropMenu,
  BurgerBoxMenu,
  NavBox,
} from './Header.styled';

const lenguage = ['EN', 'UA', 'RU'];

export const Header = () => {
  const [currentLeng, setCurrentLeng] = useState('EN');
  const { t, i18n } = useTranslation();
  const { isOpen, isOpenModal, handeleShow, handeleClose } = useToggle();
  const [sticky, setSticky] = useState(false);
  const [isDropBurger, setDropBurger] = useState(false);

  const openBurger = () => setDropBurger(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if (currentLeng) {
      i18n.changeLanguage(currentLeng);
    }
  }, [currentLeng, i18n]);

  const onChangeLeng = leng => {
    i18n.changeLanguage(leng);
    setCurrentLeng(leng);
    handeleClose();
  };

  return (
    <StiledHeader scroll={window.scrollY}>
      <Container>
        <Flex>
          <Logo
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          />
          <NavBox>
            <NavBar />
          </NavBox>

          <Flex>
            <LenguageSwichWrapper>
              <LenguageSwichText>{currentLeng}</LenguageSwichText>

              {!isOpen ? (
                <TbWorld
                  style={{ width: '24px', height: '24px' }}
                  onClick={handeleShow}
                />
              ) : (
                <TbWorld
                  style={{ width: '24px', height: '24px' }}
                  onClick={handeleClose}
                />
              )}

              {isOpen && (
                <LengDropMenu>
                  {lenguage.map(el => (
                    <li key={el} onClick={() => onChangeLeng(el)}>
                      {el}
                    </li>
                  ))}
                </LengDropMenu>
              )}

              <RiArrowDropDownFill />
            </LenguageSwichWrapper>
            <Button primary onClick={handeleShow}>
              {t('header.login')}
            </Button>

            {isOpenModal && (
              <Modal onClick={handeleClose}>
                <Form onClick={handeleClose} />
              </Modal>
            )}
          </Flex>

          <BurgerBoxMenu onClick={openBurger}>
            <IoIosMenu />
          </BurgerBoxMenu>

          {isDropBurger && <MobileMenu onClick={openBurger} />}
        </Flex>
      </Container>
    </StiledHeader>
  );
};
