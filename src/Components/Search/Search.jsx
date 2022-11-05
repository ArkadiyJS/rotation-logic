import React from 'react';

function Search(props) {
  return (
    <>
      <input
        className='Input'
        placeholder='Найти товар...'
        type='text'
        value={props.searchValue}
        onChange={(e) => { props.setSearchValue(e) }}


      />
    </>
  );
}

export default Search;