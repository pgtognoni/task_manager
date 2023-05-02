import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloWorld from './theory/HelloWorld';
import DisplayList from './theory/DisplayList';
import Form from './theory/Form';
import TaskManager from './toDos/TaskManager';

function App() {

  return (
    <div className="App">
      <TaskManager />
    </div>
  );
}

export default App;
