import React from 'react';
import style from './App.module.scss';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navigation/Navbar';

import { Profile } from './components/Main/Profile/Profile';
import { Route } from 'react-router-dom';
import { DialogsContainer } from './components/Messages/DialogsContainer';
import { Friends } from './components/Friends/Friends';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { Find } from './components/Friends/Find';
import { Help } from './components/Help/Help';

function App(props) {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <div className={style.app_main}>
        <Navbar />
        <Main>
            <Route
              path="/profile"
              render={() => <Profile store={props.store} />}
            />
            <Route
              path="/messages"
              render={() => <DialogsContainer store={props.store} />}
            />
            <Route
            exact
              path="/friends"
              render={() => <Friends store={props.store} />}
            />
            <Route
              path="/friends/find"
              render={() => <Find store={props.store} />}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/help" render={() => <Help />} />
        </Main>
      </div>
    </div>
  );
}

export default App;
