import { useTranslation } from 'react-i18next';

//StyledComponent
import {
  BgImg,
  Input,
  StyledHero,
  ContentWrapper,
  FormBtn,
  Form,
  SuggestionsItem,
  HeroStudentWrapper,
  HeroImgList,
  HeroImgItem,
  HeroStudentBtnPlus,
  StudentText,
  StyledLabel,
} from './Hero.styled';

//images
import { HiOutlineSearch, HiPlus } from 'react-icons/hi';
import img38 from '../../assets/img/heroImg/Ellipse_38.jpg';
import img39 from '../../assets/img/heroImg/Ellipse_39.jpg';
import img40 from '../../assets/img/heroImg/Ellipse_40.jpg';
import img41 from '../../assets/img/heroImg/Ellipse_41.jpg';
import { Container } from 'components/Container';

const suggestionsName = [
  'UI UX Design',
  'CSS Fundamental',
  '3D Design Illustration',
  'Website Development',
  'Logo Design',
  'Icon Design',
];

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <StyledHero name="home">
      {/* <Container> */}
      <BgImg />
      <HeroStudentWrapper>
        <HeroImgList>
          <HeroImgItem>
            <a href="">
              <img src={img38} alt="" />
            </a>
          </HeroImgItem>
          <HeroImgItem>
            <a href="">
              <img src={img39} alt="" />
            </a>
          </HeroImgItem>
          <HeroImgItem>
            <a href="">
              <img src={img40} alt="" />
            </a>
          </HeroImgItem>
          <HeroImgItem>
            <a href="">
              <img src={img41} alt="" />
            </a>
          </HeroImgItem>

          <HeroStudentBtnPlus>
            <HiPlus />
          </HeroStudentBtnPlus>
          <StudentText>
            {t('hero.p2')} <span>{t('hero.p3')} </span>
          </StudentText>
        </HeroImgList>
      </HeroStudentWrapper>
      <ContentWrapper>
        <h1>{t('hero.h1')}</h1>
        <p>{t('hero.p1')} </p>
        <Form>
          <StyledLabel>
            <Input type="text" placeholder={t('hero.p4')} />
            <FormBtn>
              <HiOutlineSearch />
            </FormBtn>
          </StyledLabel>
        </Form>

        <h2>{t('hero.h2')} </h2>
        <ul>
          {suggestionsName.map(name => (
            <SuggestionsItem key={name}>{name}</SuggestionsItem>
          ))}
        </ul>
      </ContentWrapper>
      {/* </Container> */}
    </StyledHero>
  );
};
