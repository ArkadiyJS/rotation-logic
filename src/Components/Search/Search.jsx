import React from 'react';

const Search = (props) => {
  return (
    <>
      <input
        className='Input'
        placeholder='Найти товар...'
        type='text'
        value={props.searchValue}
        onChange={(e) => { props.changeInput(e) }}


      />
    </>
  );
}

export default Search;