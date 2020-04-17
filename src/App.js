import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/layout/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/layout/logs/AddLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

const  App = () => {
  useEffect( () => {
    // Initialize all js materialize
    M.AutoInit(); 
  })

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <AddTechModal />
        <TechListModal />
      <Logs />
      </div>
      
    </Fragment>
  );
}

export default App;
