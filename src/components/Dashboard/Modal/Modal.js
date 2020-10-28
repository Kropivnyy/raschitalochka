import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { financeOperations } from '../../../redux/finance';
import { costCategories, incomeCategories } from '../../../categories';
import styles from './Modal.module.css';

const Modal = ({ type, isVisibleModal, onClose }) => {
  const modalRootRef = document.querySelector('#modal-root');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [category, setCategory] = useState(
    type === 'Income' ? incomeCategories[0].value : costCategories[0].value,
  );
  const [comments, setComments] = useState('');

  const dispatch = useDispatch();

  const onAddTransaction = useCallback(
    values => dispatch(financeOperations.postTransaction(values)),
    [dispatch],
  );

  const handleChangeInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'amount':
        setAmount(value);
        break;

      case 'comments':
        setComments(value);
        break;

      case 'category':
        setCategory(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  };

  const handleChangeDate = event => {
    //   console.log(event.target);
    // const { name, value } = event.target;
  };

  const handleSubmit = event => {
    event.preventDefault();

    onAddTransaction({ amount, date, category, comments, type });
    resetState();
    onClose();
  };

  const resetState = () => {
    setAmount('');
    setComments('');
    setDate(new Date().toISOString().substr(0, 10));
    setCategory(
      type === 'Income' ? incomeCategories[0].value : costCategories[0].value,
    );
  };

  //   useEffect(() => {
  //     const onKeydownEscape = event => {
  //       if (event.code === 'Escape') {
  //         onClose();
  //       }
  //     };
  //     window.addEventListener('keydown', onKeydownEscape);
  //     return () => {
  //       window.removeEventListener('keydown', onKeydownEscape);
  //     };
  //   }, [onClose]);

  return isVisibleModal
    ? createPortal(
        <>
          <div className={styles.Overlay}>
            <div className={styles.Modal}>
              <h3 className={styles.Heading}>Add {type}</h3>
              <form className={styles.Form} onSubmit={handleSubmit}>
                <div className={styles.input__container}>
                  <input
                    autoFocus
                    required
                    type="number"
                    min="1"
                    name="amount"
                    value={amount}
                    placeholder="Amount"
                    onChange={handleChangeInput}
                    className={`${styles.input} ${styles.inputAmount}`}
                    autoComplete="off"
                  />
                  <input
                    // type="date"
                    name="date"
                    value={date}
                    readOnly
                    placeholder="dd/mm/yyyy"
                    onChange={handleChangeDate}
                    className={styles.input}
                  />
                </div>
                <div className={styles.container}>
                  <h4 className={styles.subHeading}>Categories</h4>
                  {type === 'Income' ? (
                    <>
                      {incomeCategories.map(cat => (
                        <React.Fragment key={cat.value}>
                          <label>
                            <input
                              onChange={handleChangeInput}
                              checked={category === cat.value}
                              value={cat.value}
                              name="category"
                              type="radio"
                              className={styles.radioInput}
                            />
                            <span className={styles.radioName}>{cat.text}</span>
                          </label>
                          <br />
                        </React.Fragment>
                      ))}
                    </>
                  ) : (
                    <>
                      {costCategories.map(cat => (
                        <React.Fragment key={cat.value}>
                          <label>
                            <input
                              onChange={handleChangeInput}
                              checked={category === cat.value}
                              value={cat.value}
                              name="category"
                              type="radio"
                            />
                            {cat.text}
                          </label>
                          <br />
                        </React.Fragment>
                      ))}
                    </>
                  )}
                </div>
                <div className={styles.container}>
                  <h4 className={styles.subHeading}>Comments</h4>
                  <textarea
                    name="comments"
                    value={comments}
                    placeholder="Write comment (optional)"
                    onChange={handleChangeInput}
                    className={styles.inputTextarea}
                    autoComplete="off"
                  />
                </div>
                <div className={styles.input__container}>
                  <button className={styles.submitButton} type="submit">
                    Add
                  </button>
                  <button
                    type="button"
                    className={`modal-close-button ${styles.closeButton}`}
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={onClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>,
        modalRootRef,
      )
    : null;
};

export default Modal;
