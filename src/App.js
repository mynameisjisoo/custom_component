import styles from './App.module.css';
import Autocomplete from './component/autocomplete';
import ClickToEdit from './component/clickToEdit';
import Modal from './component/modal';
import Tab from './component/tab';
import Tag from './component/tag';
import Toggle from './component/toggle';

function App() {
  return (
    <div className={styles.App}>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <Autocomplete />
      <ClickToEdit />
    </div>
  );
}

export default App;
