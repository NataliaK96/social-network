import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import profileReducer from './profileReducer';
import { messagesReducer } from './messagesReducer';
import { musicReducer } from './musicReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';
import { friendsReducer } from './friendsReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  musicPage: musicReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  friendsPage: friendsReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
window.__store__ = store;
export default store;
