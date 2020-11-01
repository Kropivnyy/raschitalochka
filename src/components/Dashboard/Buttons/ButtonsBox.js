import React from 'react';
import AddTransactionBtn from './AddTransactionBtn';
import Modal from '../Modal';
import useModal from '../Modal/useModal';
import s from './ButtonsBox.module.css';

const ButtonsBox = () => {
  const {
    isVisibleModal,
    showModal,
    hideModal,
    modalType,
    setModalType,
  } = useModal();
  const onClick = type => {
    setModalType(type);
    showModal();
  };
  return (
    <>
      <div className={s.buttonsBox}>
        <AddTransactionBtn onClick={onClick} type="Income" />
        <AddTransactionBtn onClick={onClick} type="Cost" />
      </div>
      <Modal
        type={modalType}
        isVisibleModal={isVisibleModal}
        onClose={hideModal}
      />
    </>
  );
};

export default ButtonsBox;
