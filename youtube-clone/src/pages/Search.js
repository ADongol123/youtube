import React from 'react';
import SearchPage from '../component/SearchPage';
import Sidebar from '../component/Sidebar';

function Search() {
  return <div> 
      <div className='app__page'>
              <Sidebar/>
              <SearchPage/>
          </div>
  </div>;
}

export default Search;
