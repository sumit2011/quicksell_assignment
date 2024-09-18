

import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar';
import DashBoard from './components/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './Actions/DataAction';


const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: "10px" }}>
      <NavBar />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  );
};

export default App;
