import styles from './App.module.css';
import Modal from './component/modal';
import Toggle from './component/toggle';

function App() {
  return (
    <div className={styles.App}>
      <Toggle></Toggle>
      <Modal></Modal>
    </div>
  );
}

export default App;
