import React, { useRef } from 'react';
import styles from './modal.module.css';

const Modal = props => {
  const modalRef = useRef();
  const madalWrapperRef = useRef();
  const openModal = () => {
    modalRef.current.style.display = 'block';
    madalWrapperRef.current.style.display = 'block';
  };

  const closeModal = () => {
    modalRef.current.style.display = 'none';
    madalWrapperRef.current.style.display = 'none';
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.subject}>Modal</h3>
      <button className={styles.openButton} onClick={openModal}>
        Open Modal
      </button>
      <div ref={madalWrapperRef} className={styles.modalWrapper}>
        <div ref={modalRef} className={styles.modal}>
          <button className={styles.closeButton} onClick={closeModal}>
            x
          </button>
          <p>HELLO CODESTATES!</p>
        </div>
      </div>
    </section>
  );
};

export default Modal;
