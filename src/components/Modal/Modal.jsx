import { useEffect } from 'react';

//StyledComponent
import { Overlay, StyledBodyModal } from './Modal.styled';

export const Modal = ({ onClick, children }) => {
  useEffect(() => {
    const closeModal = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };

    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [onClick]);

  return (
    <Overlay onClick={e => e.currentTarget === e.target && onClick()}>
      <StyledBodyModal>{children}</StyledBodyModal>
    </Overlay>
  );
};
