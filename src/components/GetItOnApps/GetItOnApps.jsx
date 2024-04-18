import { Container } from './components/Container/Container';

//StyledComponent
import {
  AppsWrapper,
  ContentWrapper,
  LinkWrapper,
  StiledSection,
  StyledImg,
  Text,
  Title,
} from './GetItOnApps.styled';

//images
import googlePlay from '../../assets/img/getItOnAppsImg/googlePlay.jpg';
import apple from '../../assets/img/getItOnAppsImg/apple.jpg';
import messageImg from '../../assets/img/getItOnAppsImg/Group_1127.png';
import { useTranslation } from 'react-i18next';

export const GetItOnApps = () => {
  const { t } = useTranslation();

  return (
    <StiledSection>
      <Container>
        <AppsWrapper>
          <ContentWrapper>
            <Title>{t('getItOnApps.h2')}</Title>
            <Text>{t('getItOnApps.p')}</Text>
            <LinkWrapper>
              <a href="">
                <img src={googlePlay} alt="" />
              </a>
              <a href="">
                <img src={apple} alt="" />
              </a>
            </LinkWrapper>
          </ContentWrapper>

          <StyledImg src={messageImg} alt="" />
        </AppsWrapper>
      </Container>
    </StiledSection>
  );
};
