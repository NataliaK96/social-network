import React from 'react';
import style from './App.module.scss';

import HeaderContainer from './components/Header/HeaderContainer';
import { Main } from './views/profilePage/Main/Main';
import { Navbar } from './components/Navigation/Navbar';

import { Route } from 'react-router-dom';
import { DialogsContainer } from './views/messagesPage/Messages/DialogsContainer';
import { Friends } from './views/friendsPage/Friends/Friends';
import { News } from './views/newsPage/News/News';
import { Music } from './views/musicPage/Music/Music';
import { Settings } from './views/settingsPage/Settings/Settings';
import { Find } from './views/friendsPage/Friends/Find';
import { Help } from './views/helpPage/Help/Help';
import ProfileContainer from './views/profilePage/Main/Profile/ProfileContainer';

function App(props) {
  return (
    <div className={style.app_wrapper}>
      <HeaderContainer />
      <div className={style.app_main}>
        <Navbar />
        <Main>
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer store={props.store} />}
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
