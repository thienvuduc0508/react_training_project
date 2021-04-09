import './App.css';
import ClassCounter from '../components/ClassComponents/ClassCounter';
import HookCounter from '../components/FuncComponents/HookCounter';
import ClassInterval from '../components/ClassComponents/ClassInterval';
import HookInterval from '../components/FuncComponents/HookInterval';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      <ClassInterval />
      <HookInterval />
    </div>
  );
}

export default App;
