import styled from 'styled-components';
import InputMask from 'react-input-mask';

// export const StyledInput = styled.input`
export const StyledInput = styled(InputMask)`
  width: 295px;
  height: 35px;
  padding: 10px;
  background: var(--form-input-color);
  border-radius: var(--br-sirch-form);
  border: none;
  outline: none;
  color: var(--white-color);

  &::placeholder {
    letter-spacing: 1px;
    font-size: var(--fs-md);
    line-height: var(--lh-md);
    color: var(--secondary-text-color);
  }

  @media (max-width: 567.9px) {
    width: 230px;
  }
`;

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    margin-bottom: 15px;
  }

  svg {
    position: absolute;
    top: -25px;
    right: -25px;
    width: 30px;
    height: 30px;
    transition: all 0.25s ease-out;

    &:hover {
      fill: var(--white-color);
    }
  }
`;

export const WrapperError = styled.div`
  display: flex;
  height: 28px;
  margin-left: 10px;
  color: red;
`;
