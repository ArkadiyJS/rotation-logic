import React, { useState } from 'react';

const List = (props) => {



  const [showInfo,setShowInfo] = useState(false)
  const openInfo = ()=>{setShowInfo(!showInfo)}
  return (
    <li>
      <ul onClick={()=>{openInfo()}}>
      {props.name}

      {showInfo ? <>
      <li>Номер: {props.id}</li>
      <li>Дата: {props.data}</li>
      <li>Количество: {props.quantity}</li>
      </>  : '' }
      
      
        </ul>
      
    </li>
  );
}

export default List;