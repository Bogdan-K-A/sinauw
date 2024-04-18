import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Container } from '../Container';
import { Logo } from '../Logo';

//StyledComponent
import {
  BottomCaption,
  FooterListMenu,
  FooterWrapper,
  LogoWrapper,
  StiledSection,
  StyledSocialList,
  Flex,
} from './Footer.styled';

//images
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <StiledSection>
      <Container>
        <Flex>
          <LogoWrapper>
            <Logo
              width="width"
              height="height"
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            />

            <p>{t('footer.p')}</p>
            <StyledSocialList>
              <li>
                <a href="">
                  <ImFacebook />
                </a>
              </li>
              <li>
                <a href="">
                  <ImTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <GrInstagram />
                </a>
              </li>
            </StyledSocialList>
          </LogoWrapper>
          <FooterWrapper>
            <FooterListMenu marginRight>
              <h3>{t('footer.list1.h3')}</h3>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  {t('footer.list1.li1')}
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  {t('footer.list1.li2')}
                </Link>
              </li>
              <li>
                <Link
                  to="webinar"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  {t('footer.list1.li3')}
                </Link>
              </li>
            </FooterListMenu>

            <FooterListMenu marginRight>
              <h3>{t('footer.list2.h3')}</h3>
              <li>
                <a href="">{t('footer.list2.li1')}</a>
              </li>
              <li>
                <a href="">{t('footer.list2.li2')}</a>
              </li>
              <li>
                <a href="">{t('footer.list2.li3')}</a>
              </li>
              <li>
                <a href="">{t('footer.list2.li4')}</a>
              </li>
            </FooterListMenu>

            <FooterListMenu marginRight>
              <h3>{t('footer.list3.h3')}</h3>
              <li>
                <a href="">{t('footer.list3.li1')}</a>
              </li>
              <li>
                <a href="">{t('footer.list3.li2')}</a>
              </li>
            </FooterListMenu>

            <FooterListMenu>
              <h3>{t('footer.list4.h3')}</h3>
              <li>
                <a href="">{t('footer.list4.li1')}</a>
              </li>
              <li>
                <a href="">{t('footer.list4.li2')}</a>
              </li>
            </FooterListMenu>
          </FooterWrapper>
        </Flex>
        <BottomCaption>
          <p>Copyright &copy; 2021 Sinauw. All Rights Reserved.</p>
        </BottomCaption>
      </Container>
    </StiledSection>
  );
};
