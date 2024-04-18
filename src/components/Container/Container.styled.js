import styled from 'styled-components';

export const SectionContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  /* outline: 1px solid red; */
  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    max-width: 1140px;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    max-width: 960px;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    max-width: 720px;
  }

  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    max-width: 540px;
  }
`;
