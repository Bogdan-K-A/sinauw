import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 12px 32px;
  margin: ${({ margin }) => (margin ? '0 auto' : null)};
  background: ${({ primary }) => (primary ? '#f5443b' : 'none')};
  color: ${({ primary }) => (primary ? '#ffffff' : '#f5443b')};

  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-sm1);

  border-radius: 6px;
  border: 1px solid var(--primary-btn-color);
  cursor: pointer;

  transition: all 0.25s ease-out;
  :focus,
  :hover {
    background: var(--primary-btn-color);
    color: var(--white-color);
  }

  @media (max-width: 575.98px) {
    padding: 6px 15px;
  }
`;
