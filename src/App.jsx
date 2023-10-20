import style from './App.module.css';
import Conway from './components/Conway/Conway';
import Story from './components/Story/Story';
import { pulsarSchema } from './utils/schema';

function App() {
  return (
    <div className={style.App}>
      <div className={style.section_wrapper}>
        <Conway schema={pulsarSchema} isRunning />
      </div>
      <Story />
    </div>

  );
}
export default App;
