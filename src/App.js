import styles from './App.module.css';
import Modal from './component/modal';
import Tab from './component/tab';
import Tag from './component/tag';
import Toggle from './component/toggle';

function App() {
  return (
    <div className={styles.App}>
      <Toggle></Toggle>
      <Modal></Modal>
      {/* <Tab></Tab> */}
      <Tag></Tag>
    </div>
  );
}

export default App;
