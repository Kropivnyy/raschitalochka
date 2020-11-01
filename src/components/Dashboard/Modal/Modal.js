import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import nextId from 'react-id-generator';
import { financeOperations } from '../../../redux/finance';
import { costCategories, incomeCategories } from '../../../categories';
import Media from 'react-media';
import styles from './Modal.module.css';
import { ReactComponent as ArrowLogo } from '../../../svg/arrow.svg';

const Modal = ({ type, isVisibleModal, onClose }) => {
  const modalRootRef = document.querySelector('#modal-root');
  const overlayId = nextId('overlay-id');
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

      case 'date':
        const curDate = new Date();
        Date.parse(value) > curDate
          ? setDate(curDate.toISOString().substr(0, 10))
          : setDate(value);
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

  useEffect(() => {
    const onKeydownEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeydownEscape);
    return () => {
      window.removeEventListener('keydown', onKeydownEscape);
    };
  }, [onClose]);

  useEffect(() => {
    const onOverlay = event => {
      if (event.target.id === overlayId) {
        onClose();
        event.stopPropagation();
      }
    };
    window.addEventListener('click', onOverlay);
    return () => {
      window.removeEventListener('click', onOverlay);
    };
  }, [onClose, overlayId]);

  return isVisibleModal
    ? createPortal(
        <>
          <div id={overlayId} className={styles.Overlay}>
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
                    type="date"
                    max={new Date().toISOString().substr(0, 10)}
                    name="date"
                    value={date}
                    placeholder="dd/mm/yyyy"
                    onChange={handleChangeInput}
                    className={styles.input}
                  />
                </div>
                <div className={styles.container}>
                  <h4 className={styles.subHeading}>Categories</h4>
                  {type === 'Income' ? (
                    <>
                      {incomeCategories.map(cat => (
                        <React.Fragment key={cat.value}>
                          <label className={styles.radioLabel}>
                            <input
                              onChange={handleChangeInput}
                              checked={category === cat.value}
                              value={cat.value}
                              required
                              name="category"
                              type="radio"
                              className={styles.radioInputIncome}
                            />
                            <span className={styles.radioName}>{cat.text}</span>
                          </label>
                        </React.Fragment>
                      ))}
                    </>
                  ) : (
                    <>
                      {costCategories.map(cat => (
                        <React.Fragment key={cat.value}>
                          <label className={styles.radioLabel}>
                            <input
                              onChange={handleChangeInput}
                              checked={category === cat.value}
                              value={cat.value}
                              name="category"
                              required
                              type="radio"
                              className={styles.radioInputCost}
                            />
                            <span className={styles.radioName}>{cat.text}</span>
                          </label>
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
                    rows="2"
                  />
                </div>
                <div className={styles.input__container}>
                  <button className={styles.submitButton} type="submit">
                    Add
                  </button>
                  <Media
                    queries={{
                      mobile: '(max-width: 767px)',
                    }}
                  >
                    {matches => (
                      <>
                        {matches.mobile && (
                          <button
                            type="button"
                            className={`modal-close-button ${styles.closeButton}`}
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                          >
                            <ArrowLogo className={styles.closeButton__svg} />
                          </button>
                        )}
                      </>
                    )}
                  </Media>
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
