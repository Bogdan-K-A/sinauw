import { useTranslation } from 'react-i18next';

import { Button } from '../Button';
import { Container } from '../Container';

//StyledComponent
import {
  Card,
  Section,
  Text,
  Title,
  WrapperCards,
  TitleWrapper,
  Line,
  Point,
  ButtonWrapper,
  WrapperNameCours,
  IconPopular,
} from './Pricing.styled';

//images
import free from '../../assets/img/icons/pricingIcon/free.svg';
import express from '../../assets/img/icons/pricingIcon/express.svg';
import premium from '../../assets/img/icons/pricingIcon/premium.svg';

export const Pricing = () => {
  const { t } = useTranslation();

  return (
    <Section name="pricing">
      <Container>
        <Title>{t('pricing.h2')}</Title>
        <Text>{t('pricing.p')}</Text>

        <WrapperCards>
          <Card>
            <div>
              <TitleWrapper>
                <div>
                  <img src={free} alt="" />
                </div>
                <WrapperNameCours>
                  <h3>{t('pricing.card1.title')}</h3>
                  <p>
                    <span>
                      <sup>$</sup>0
                    </span>
                    / {t('pricing.card1.month')}
                  </p>
                </WrapperNameCours>
              </TitleWrapper>
              <Line></Line>

              <ul>
                <li>
                  <p>
                    <Point></Point>
                    {t('pricing.card1.li1')}
                  </p>
                </li>
                <li>
                  <p>
                    <Point></Point>
                    {t('pricing.card1.li2')}
                  </p>
                </li>
                <li>
                  <p>
                    <Point></Point>
                    {t('pricing.card1.li3')}
                  </p>
                </li>
                <li>
                  <p>
                    <Point></Point>
                    {t('pricing.card1.li4')}
                  </p>
                </li>
              </ul>
            </div>
            <ButtonWrapper>
              <Button>{t('pricing.card1.btn')}</Button>
            </ButtonWrapper>
          </Card>

          <Card>
            <TitleWrapper>
              <div>
                <img src={express} alt="" />
              </div>
              <WrapperNameCours>
                <h3>{t('pricing.card2.title')}</h3>
                <p>
                  <span>
                    <sup>$</sup>75
                  </span>
                  / {t('pricing.card2.month')}
                </p>
              </WrapperNameCours>
            </TitleWrapper>
            <Line></Line>

            <ul>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card2.li1')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card2.li2')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card2.li3')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card2.li4')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card2.li5')}
                </p>
              </li>
            </ul>
            <ButtonWrapper>
              <Button>{t('pricing.card2.btn')}</Button>
            </ButtonWrapper>
          </Card>

          <Card position>
            <IconPopular />
            <TitleWrapper>
              <div>
                <img src={premium} alt="" />
              </div>
              <WrapperNameCours>
                <h3>{t('pricing.card3.title')}</h3>
                <p>
                  <span>
                    <sup>$</sup>115
                  </span>
                  / {t('pricing.card3.month')}
                </p>
              </WrapperNameCours>
            </TitleWrapper>
            <Line></Line>
            <ul>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card3.li1')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card3.li2')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card3.li3')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card3.li4')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card3.li5')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card3.li6')}
                </p>
              </li>
              <li>
                <p>
                  <Point></Point>
                  {t('pricing.card3.li7')}
                </p>
              </li>
            </ul>

            <ButtonWrapper>
              <Button>{t('pricing.card3.btn')}</Button>
            </ButtonWrapper>
          </Card>
        </WrapperCards>
      </Container>
    </Section>
  );
};
