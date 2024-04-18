import { useTranslation } from 'react-i18next';
import { Container } from '../Container';

//StyledComponent
import {
  DescriptionWrapper,
  FeaturedList,
  FeaturedListItem,
  StiledSection,
} from './Featured.styled';

//images
import friends from '../../assets/img/icons/featuredIcon/Group_1243.svg';
import mentor from '../../assets/img/icons/featuredIcon/Group_1244.svg';
import access from '../../assets/img/icons/featuredIcon/Group_1245.svg';

export const Featured = () => {
  const { t } = useTranslation();
  return (
    <StiledSection>
      <Container>
        <FeaturedList>
          <FeaturedListItem>
            <img src={friends} alt="friends" />

            <DescriptionWrapper>
              <h2>{t('featured.card1.h2')}</h2>
              <p>{t('featured.card1.p')}</p>
            </DescriptionWrapper>
          </FeaturedListItem>
          <FeaturedListItem>
            <img src={mentor} alt="friends" />
            <DescriptionWrapper>
              <h2>{t('featured.card2.h2')}</h2>
              <p>{t('featured.card2.p')}</p>
            </DescriptionWrapper>
          </FeaturedListItem>
          <FeaturedListItem>
            <img src={access} alt="friends" />
            <DescriptionWrapper>
              <h2>{t('featured.card3.h2')}</h2>
              <p>{t('featured.card3.p')}</p>
            </DescriptionWrapper>
          </FeaturedListItem>
        </FeaturedList>
      </Container>
    </StiledSection>
  );
};
