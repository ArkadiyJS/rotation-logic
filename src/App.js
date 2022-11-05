import './App.css';
import List from './Components/List/List';
import Search from './Components/Search/Search';
import axios from "axios";
import { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const changeInput = (e) =>{
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    axios.get('https://636626dc79b0914b75ca7a73.mockapi.io/data').then((res) => { setItems(res.data) })
  }, [])



  return (
    <div className="App">
      <h1> Ez Rotation</h1>

      <Search searchValue={searchValue} changeInput={changeInput} />

      <>
        {items.map((i) => <List key={i.name} id={i.id} name={i.name} quantity={i.quantity} data={i.data} />)}
      </>

    </div>
  );
}

export default App;
