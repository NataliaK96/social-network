import React from 'react';
import style from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { Main } from './views/profilePage/Main/Main';
import { Navbar } from './components/Navigation/Navbar';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { Find } from './views/friendsPage/Friends/Find';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../src/redux/appReducer';
import { compose } from 'redux';
import { Preloader } from './components/Preloader/Preloader';
import { DialogsContainer } from './views/messagesPage/Messages/DialogsContainer';
import { withSuspense } from './hoc/withSuspense';
import { MusicContainer } from './views/musicPage/MusicContainer';
import { FriendsContainer } from './views/friendsPage/Friends/FriendsContainer';

const ProfileContainer = React.lazy(() =>
  import('./views/profilePage/Main/Profile/ProfileContainer')
);
class App extends Component {
constructor(props){
  super(props);
  this.state={isOpenedMenu: false}
}

showMenu = (isShow) => {
  this.setState({isOpenedMenu: isShow})
}

  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className={style.app_wrapper}>
        <HeaderContainer isOpenedMenu={this.state.isOpenedMenu} onShowMenu={this.showMenu} />
        <Route path="/login" render={() => <Login />} />
        {this.props.isAuth ? (
          <div className={style.app_main}>
           {this.state.isOpenedMenu && <Navbar />}
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
                render={() => <FriendsContainer store={this.props.store} />}
              />
              <Route
                path="/friends/find"
                render={() => <Find store={this.props.store} />}
              />
              <Route path="/music" render={() => <MusicContainer />} />
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
