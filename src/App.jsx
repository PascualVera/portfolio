import style from './App.module.css';
import Conway from './components/Conway/Conway';
import Story from './components/Story/Story';
import { helloSchema, pulsarSchema } from './utils/schema';

function App() {
  return (
    <div className={style.App}>
      <div className={style.section_wrapper}>
        <div className={style.title_wrapper}>
          <Conway schema={helloSchema} isRunning={false} />
        </div>
        <Conway schema={pulsarSchema} isRunning />
      </div>
      <Story />
    </div>

  );
}
export default App;
