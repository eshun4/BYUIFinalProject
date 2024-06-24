import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import NavItems from './components/NavItems';
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <>
        <NavItems/>
        <div className='min-vh-100'>
        <Outlet/>
        <Footer/>
        </div>
      </>
    </Provider>
  );
}

export default App;
