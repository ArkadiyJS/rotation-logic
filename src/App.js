import './App.css';
import List from './Components/List/List';
import Search from './Components/Search/Search';

const App = () => {
  return (
    <div className="App">
      <h1> Ez Rotation</h1>
      <Search />
      <List />
    </div>
  );
}

export default App;
