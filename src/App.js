import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/layout/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/layout/logs/AddLogModal';
import EditLogModal from './components/layout/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import store from './components/store';
import {Provider} from 'react-redux'; 

const  App = () => {
  useEffect( () => {
    // Initialize all js materialize
    M.AutoInit(); 
  })

  return (
    <Provider store = {store}>
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        
      </div>
      
    </Fragment>
    </Provider>
  );
}

export default App;
