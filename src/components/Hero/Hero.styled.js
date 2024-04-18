import styled from 'styled-components';
import heroImg from '../../assets/img/hero-img.png';

export const StyledHero = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  padding: 50px 0 103px 0;

  @media (max-width: 575.98px) {
    padding: 15px 0 40px 0;
  }
`;

export const BgImg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 773px;
  height: 800px;
  background: url(${heroImg}) no-repeat center/cover;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 601px;
  margin-top: 80px;
  margin-left: auto;
  z-index: 1;

  > h1 {
    font-weight: var(--fw-semiBold);
    font-size: var(--fs-hg);
    line-height: var(--lh-sm2);
    color: var(--primary-text-color);
    margin-bottom: 24px;
  }

  > p,
  > h2 {
    margin-bottom: 56px;
    font-weight: var(--fw-regular);
    font-size: var(--fs-nm);
    line-height: var(--lh-md);
    color: var(--secondary-text-color);
  }

  > h2 {
    margin-bottom: 34px;
  }

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 767.98px) {
    padding: 0 15px;
    > h1 {
      font-size: var(--fs-lg);
    }
  }

  @media (max-width: 575.98px) {
    height: 501px;
    > h1 {
      font-size: 26px;
    }

    > p,
    > h2 {
      margin-bottom: 24px;
      font-size: var(--fs-md);
    }
  }
`;

export const Form = styled.form`
  margin-bottom: 48px;

  @media (max-width: 575.98px) {
    margin-bottom: 28px;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 506px;
  padding: 22px 60px 22px 32px;
  background: var(--form-input-color);
  border-radius: var(--br-sirch-form);
  border: none;
  outline: none;
  color: var(--white-color);

  &::placeholder {
    font-weight: var(--fw-regular);
    font-size: var(--fs-md);
    line-height: var(--lh-md);
    color: var(--secondary-text-color);
  }

  @media (max-width: 1199.98px) {
    width: 100%;
  }
  /* 
  @media (max-width: 991.98px) {
 
  }

  @media (max-width: 767.98px) {
   
  } */

  @media (max-width: 575.98px) {
    padding: 18px 40px 18px 22px;
  }
`;

export const FormBtn = styled.span`
  position: absolute;
  right: 13px;
  bottom: -14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: var(--card-separator-line-color);
  border-radius: var(--br-sm);
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 575.98px) {
    right: 10px;
    bottom: -9px;
    width: 34px;
    height: 34px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const SuggestionsList = styled.ul`
  display: flex;
  width: 503px;
  height: 100px;
`;

export const SuggestionsItem = styled.li`
  display: inline-block;
  padding: 8px 18px;
  margin: 0 24px 24px 0;
  border: 1px solid var(--hero-text-color);
  border-radius: var(--br-md);
  color: var(--hero-text-color);

  @media (max-width: 575.98px) {
    margin: 0 10px 10px 0;
    padding: 6px 14px;
  }
`;

export const HeroStudentWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 27%;
  bottom: 20%;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const HeroImgList = styled.ul`
  display: flex;
  padding: 20px;
  background: var(--section-with-stutud-in-section-hero-bg-color);
  border-radius: var(--br-card);
`;

export const HeroImgItem = styled.li`
  margin-right: -16px;

  img {
    border-radius: var(--br-circle);
  }
`;

export const HeroStudentBtnPlus = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: #8087b8;
  border: 1px solid #6668aa;
  border-radius: var(--br-circle);
  cursor: pointer;

  svg {
    fill: var(--primary-bg-color);
    width: 24px;
    height: 24px;
  }
`;

export const StudentText = styled.div`
  width: 111px;
  height: 44px;
  margin-left: 16px;
  font-weight: var(--fw-medium);
  line-height: var(--lh-nm);
  color: #bbbbc4;

  span {
    color: var(--primary-btn-color);
  }
`;
