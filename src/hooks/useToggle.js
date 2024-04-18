import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isOpen, setisOpen] = useState(initialState);
  const [isOpenModal, setOpenModal] = useState(false);

  const handeleShow = e => {
    if (e.target.nodeName === 'BUTTON') {
      setOpenModal(true);
      setisOpen(false);
      return;
    }
    setisOpen(true);
  };

  const handeleClose = () => {
    setisOpen(false);
    setOpenModal(false);
  };

  return { isOpen, isOpenModal, handeleShow, handeleClose };
};
