import { useState } from 'react';

const useModal = () => {
  const [isVisibleModal, setShowModal] = useState(false);
  const [modalType, changeModalType] = useState('Income');

  function toggleModal() {
    setShowModal(!isVisibleModal);
  }
  function setModalType(value) {
    changeModalType(value);
  }

  return {
    isVisibleModal,
    toggleModal,
    modalType,
    setModalType,
  };
};

export default useModal;
