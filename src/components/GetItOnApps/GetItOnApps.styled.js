import styled from 'styled-components';

export const StiledSection = styled.section`
  padding: 60px 0 100px 0;

  @media (max-width: 575.98px) {
    padding: 60px 0 50px 0;
  }
`;

export const AppsWrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 435px;
  padding: 40px 103px 0;
  margin: 0 auto;
  background: var(--box-in-section-get_it_on_apps-bg-color);
  border-radius: var(--br-big);

  @media (max-width: 1199.98px) {
    max-width: 900px;
    height: 387px;
    padding: 40px 50px 0;
  }

  @media (max-width: 991.98px) {
    max-width: 600px;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 40px 40px 0 40px;
  }

  @media (max-width: 767.98px) {
    width: 100%;
    padding: 10px 10px 0 10px;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 45px;
  margin-right: 140px;

  @media (max-width: 1199.98px) {
    margin-right: 40px;
  }

  @media (max-width: 991.98px) {
    padding-top: 0;
    margin: 0 0 32px 0;
    text-align: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: 12px;
  font-weight: var(--fw-semiBold);
  font-size: 47px;
  line-height: 1.6;
  color: var(--white-color);
  opacity: 0.7;

  @media (max-width: 1199.98px) {
    font-size: 36px;
  }

  @media (max-width: 767.98px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  width: 406px;
  margin-bottom: 32px;
  font-size: var(--fs-nm);
  line-height: 1.8;
  color: var(--primary-text-color);

  @media (max-width: 767.98px) {
    max-width: 206px;
    font-size: var(--fs-md);
    margin: 0 auto 15px auto;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  a:not(:last-child) {
    margin-right: 25px;
  }

  img {
    border-radius: var(--br-md);
  }

  @media (max-width: 767.98px) {
    justify-content: center;

    a {
      width: 100px;
    }
  }
`;

export const StyledImg = styled.img`
  width: 403px;
  height: 394px;

  @media (max-width: 1199.98px) {
    width: 370px;
    height: 347px;
  }
  @media (max-width: 767.98px) {
    width: 270px;
    height: 263px;
  }
`;
