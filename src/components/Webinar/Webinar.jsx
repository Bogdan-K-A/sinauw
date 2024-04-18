import { useTranslation } from 'react-i18next';
import { MdArrowRightAlt } from 'react-icons/md';

import { Container } from '../Container';

//StyledComponent
import {
  Section,
  Title,
  Text,
  Linck,
  LinckWrapper,
  MoviesContainer,
} from './Webinar.styled';

export const Webinar = () => {
  const { t } = useTranslation();

  return (
    <Section name="webinar">
      <Container>
        <Title>{t('webinar.h2')}</Title>
        <Text>{t('webinar.p')}</Text>
        <MoviesContainer />

        <LinckWrapper>
          <Linck href="">
            <span>{t('webinar.link')}</span>
            <span>
              <MdArrowRightAlt />
            </span>
          </Linck>
        </LinckWrapper>
      </Container>
    </Section>
  );
};
