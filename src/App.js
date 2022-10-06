import './App.css';
import MyList from './components/MyList';

function App() {
  const toDoList = ['Start business', 'Buy house', 'Buy car'];
  return (
    <div>
      <MyList newList={toDoList} />
    </div>
  );
}

export default App;
