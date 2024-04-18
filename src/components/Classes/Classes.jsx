import { useTranslation } from 'react-i18next';
import { Button } from './components/Button/Button';
import { Container } from './components/Container/Container';

//StyledComponent
import {
  Section,
  TitleWrapper,
  ClassesList,
  Article,
  Thumb,
  LinckAtVideo,
  CategoryName,
  CardTitle,
  CardText,
  Line,
  MentorNameWrapper,
  NameMentor,
  PlaceMentor,
  BtnWrapper,
  CardContentWrapper,
} from './Classes.styled';

//images
import ellipse1 from '../../assets/img/classesImg/Ellipse_29_1.jpg';
import ellipse2 from '../../assets/img/classesImg/Ellipse_29_2.jpg';
import ellipse3 from '../../assets/img/classesImg/Ellipse_29_3.jpg';
import ellipse4 from '../../assets/img/classesImg/Ellipse_29_4.jpg';
import rectangle1 from '../../assets/img/classesImg/Rectangle_44_1.jpg';
import rectangle2 from '../../assets/img/classesImg/Rectangle_44_2.jpg';
import rectangle3 from '../../assets/img/classesImg/Rectangle_44_3.jpg';
import rectangle4 from '../../assets/img/classesImg/Rectangle_44_4.jpg';

export const Classes = () => {
  const { t } = useTranslation();

  return (
    <Section name="courses">
      <Container>
        <TitleWrapper>
          <h2>{t('classes.h2')} </h2>
          <p>{t('classes.p1')} </p>
        </TitleWrapper>

        <ClassesList>
          <li>
            <Article>
              <Thumb>
                <img src={rectangle1} alt="" />
                <LinckAtVideo>
                  <a href="#">12 {t('classes.cardV')}</a>
                </LinckAtVideo>
              </Thumb>
              <CardContentWrapper>
                <CategoryName>{t('classes.card1.category')}</CategoryName>
                <CardTitle>{t('classes.card1.title')}</CardTitle>
                <CardText>{t('classes.card1.text')}</CardText>
                <Line></Line>

                <MentorNameWrapper>
                  <img src={ellipse1} alt="" />
                  <div>
                    <NameMentor>{t('classes.card1.name')}</NameMentor>
                    <PlaceMentor>{t('classes.card1.place')}</PlaceMentor>
                  </div>
                </MentorNameWrapper>
              </CardContentWrapper>

              <BtnWrapper>
                <Button primary>
                  <a href="#">{t('classes.cardBtn')}</a>
                </Button>
              </BtnWrapper>
            </Article>
          </li>

          <li>
            <Article>
              <Thumb>
                <img src={rectangle2} alt="" />
                <LinckAtVideo>
                  <a href="#">12 {t('classes.cardV')}</a>
                </LinckAtVideo>
              </Thumb>
              <CardContentWrapper>
                <CategoryName>{t('classes.card2.category')}</CategoryName>
                <CardTitle>{t('classes.card2.title')}</CardTitle>
                <CardText>{t('classes.card2.text')}</CardText>
                <Line></Line>
                <MentorNameWrapper>
                  <img src={ellipse2} alt="" />
                  <div>
                    <NameMentor>{t('classes.card2.name')}</NameMentor>
                    <PlaceMentor>{t('classes.card2.place')}</PlaceMentor>
                  </div>
                </MentorNameWrapper>
              </CardContentWrapper>
              <BtnWrapper>
                <Button primary>
                  <a href="#">{t('classes.cardBtn')}</a>
                </Button>
              </BtnWrapper>
            </Article>
          </li>

          <li>
            <Article>
              <Thumb>
                <img src={rectangle3} alt="" />
                <LinckAtVideo>
                  <a href="#">12 {t('classes.cardV')}</a>
                </LinckAtVideo>
              </Thumb>
              <CardContentWrapper>
                <CategoryName>{t('classes.card3.category')}</CategoryName>
                <CardTitle>{t('classes.card3.title')}</CardTitle>
                <CardText>{t('classes.card3.text')}</CardText>
                <Line></Line>
                <MentorNameWrapper>
                  <img src={ellipse3} alt="" />
                  <div>
                    <NameMentor>{t('classes.card3.name')}</NameMentor>
                    <PlaceMentor>{t('classes.card3.place')}</PlaceMentor>
                  </div>
                </MentorNameWrapper>
              </CardContentWrapper>
              <BtnWrapper>
                <Button primary>
                  <a href="#">{t('classes.cardBtn')}</a>
                </Button>
              </BtnWrapper>
            </Article>
          </li>

          <li>
            <Article>
              <Thumb>
                <img src={rectangle4} alt="" />
                <LinckAtVideo>
                  <a href="#">12 {t('classes.cardV')}</a>
                </LinckAtVideo>
              </Thumb>
              <CardContentWrapper>
                <CategoryName>{t('classes.card4.category')}</CategoryName>
                <CardTitle>{t('classes.card4.title')}</CardTitle>
                <CardText>{t('classes.card4.text')}</CardText>
                <Line></Line>
                <MentorNameWrapper>
                  <img src={ellipse4} alt="" />
                  <div>
                    <NameMentor>{t('classes.card4.name')}</NameMentor>
                    <PlaceMentor>{t('classes.card4.place')}</PlaceMentor>
                  </div>
                </MentorNameWrapper>
              </CardContentWrapper>
              <BtnWrapper>
                <Button primary>
                  <a href="#">{t('classes.cardBtn')}</a>
                </Button>
              </BtnWrapper>
            </Article>
          </li>
        </ClassesList>
        <Button>
          <a href="">{t('classes.btn')}</a>
        </Button>
      </Container>
    </Section>
  );
};
