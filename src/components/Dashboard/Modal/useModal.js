import { useState } from 'react';

const useModal = () => {
  const [isVisibleModal, setShowModal] = useState(false);
  const [modalType, changeModalType] = useState('Income');

  function showModal() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }
  function setModalType(value) {
    changeModalType(value);
  }

  return {
    isVisibleModal,
    showModal,
    hideModal,
    modalType,
    setModalType,
  };
};

export default useModal;
