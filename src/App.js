import './App.css';
import List from './Components/List/List';
import Search from './Components/Search/Search';
import axios from "axios";
import { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://636626dc79b0914b75ca7a73.mockapi.io/data').then((res) => { setItems(res.data) })
  }, [])

  console.log(items)

  return (
    <div className="App">
      <h1> Ez Rotation</h1>
      <Search />
      <List />
    </div>
  );
}

export default App;
