import React from 'react';
import style from './App.module.scss';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navigation/Navbar';

function App() {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <div className={style.app_main}>
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
