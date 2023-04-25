import './App.css';
import List from './Components/List/List';
import Search from './Components/Search/Search';
import axios from "axios";
import { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState([{ id: '1', name: 'abcdefg', quantity: '222', data: '22.03.23' },
  { id: '2', name: 'a', quantity: '222', data: '22.03.23' },
  { id: '3', name: 'b', quantity: '222', data: '22.03.23' },
  { id: '4', name: 'c', quantity: '222', data: '22.03.23' },
  { id: '5', name: 'd', quantity: '222', data: '22.03.23' },
  { id: '6', name: 'e', quantity: '222', data: '22.03.23' },
  { id: '7', name: 'f', quantity: '222', data: '22.03.23' },
  { id: '8', name: 'g', quantity: '222', data: '22.03.23' },])
  const [searchValue, setSearchValue] = useState('')
  console.log(items)

  const changeInput = (e) => {
    setSearchValue(e.target.value)
  }

  // useEffect(() => {
  //   axios.get('https://6381dbba9842ca8d3c9b18a9.mockapi.io/cake').then((res) => { setItems(res.data) })
  // }, [])



  return (
    <div className="App">
      <h1> Ez Rotation</h1>

      <Search searchValue={searchValue} changeInput={changeInput} />

      <>
        {items.filter(obj => {
          if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return true
          } else { return false }
        })
          .map((i) => <List key={i.name} id={i.id} name={i.name} quantity={i.quantity} data={i.data} />)}
      </>

    </div>
  );
}

export default App;
