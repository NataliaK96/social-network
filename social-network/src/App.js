import React from 'react';
import style from './App.module.scss';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Profile } from './components/Main/Profile/Profile';
import { Route } from 'react-router-dom';
import { Dialogs } from './components/Messages/Dialogs';
import { Friends } from './components/Friends/Friends';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Header />
        <div className={style.app_main}>
          <Navbar />
          <Main>
            <Route
              path="/profile"
              render={() => (
                <Profile state={props.state.profilePage} />
              )}
            />
            <Route
              path="/messages"
              render={() => (
                <Dialogs
                  state={props.state.messagesPage}
                  
                />
              )}
            />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </Main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
