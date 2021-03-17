import React from 'react';
import style from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { Main } from './views/profilePage/Main/Main';
import { Navbar } from './components/Navigation/Navbar';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { Friends } from './views/friendsPage/Friends/Friends';
import { Settings } from './views/settingsPage/Settings';
import { Find } from './views/friendsPage/Friends/Find';
import { Help } from './views/helpPage/Help/Help';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../src/redux/appReducer';
import { compose } from 'redux';
import { Preloader } from './components/Preloader/Preloader';
import { DialogsContainer } from './views/messagesPage/Messages/DialogsContainer';
import { withSuspense } from './hoc/withSuspense';
import { MusicContainer } from './views/musicPage/MusicContainer';

const ProfileContainer = React.lazy(() =>
  import('./views/profilePage/Main/Profile/ProfileContainer')
);
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className={style.app_wrapper}>
        <HeaderContainer />
        <Route path="/login" render={() => <Login />} />
        {this.props.isAuth ? (
          <div className={style.app_main}>
            <Navbar />
            <Main>
              <Route
                path="/profile/:userId?"
                render={withSuspense(ProfileContainer)}
              />
              <Route
                path="/messages"
                render={() => <DialogsContainer store={this.props.store} />}
              />
              <Route
                exact
                path="/friends"
                render={() => <Friends store={this.props.store} />}
              />
              <Route
                path="/friends/find"
                render={() => <Find store={this.props.store} />}
              />

              <Route path="/music" render={() => <MusicContainer />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/help" render={() => <Help />} />
            </Main>
          </div>
        ) : (
          <Redirect to={'/login'} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
