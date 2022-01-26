import React, { useRef } from 'react';
import styles from './modal.module.css';

const Modal = props => {
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.style.display = 'flex';
  };

  const closeModal = () => {
    modalRef.current.style.display = 'none';
  };

  return (
    <section className={styles.section}>
      <header className={styles.subject}>Modal</header>
      <div className={styles.background}>
        <button className={styles.openButton} onClick={openModal}>
          Open Modal
        </button>
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
