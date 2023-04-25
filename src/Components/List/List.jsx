import React, { useState } from 'react';

const List = (props) => {



  const [showInfo, setShowInfo] = useState(false)
  const openInfo = () => { setShowInfo(!showInfo) }
  return (
    <>
      <ul className='nameList' onClick={() => { openInfo() }} ><p >{props.name}</p>


        {showInfo ? <>
          <li>Номер: {props.id}</li>
          <li>Дата: {props.data}</li>
          <li>Количество: {props.quantity}</li>
        </> : ''}


      </ul>

    </>
  );
}

export default List;