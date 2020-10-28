import React from 'react';
import AddTransactionBtn from './AddTransactionBtn';
import Modal from '../Modal';
import useModal from '../Modal/useModal';
import s from './ButtonsBox.module.css';

const ButtonsBox = () => {
  const { isVisibleModal, toggleModal, modalType, setModalType } = useModal();
  const showModal = type => {
    setModalType(type);
    toggleModal();
  };
  return (
    <>
      <div className={s.buttonsBox}>
        <AddTransactionBtn onClick={showModal} type="Income" />
        <AddTransactionBtn onClick={showModal} type="Cost" />
      </div>
      <Modal
        type={modalType}
        isVisibleModal={isVisibleModal}
        onClose={toggleModal}
      />
    </>
  );
};

export default ButtonsBox;
