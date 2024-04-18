import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledBodyModal = styled.div`
  padding: 36px;
  width: 372px;

  background: var(--card-bg-color);
  border-radius: var(--br-card);
  border: 3px solid var(--card-separator-line-color);

  @media (max-width: 567.9px) {
    width: 290px;
  }
`;
