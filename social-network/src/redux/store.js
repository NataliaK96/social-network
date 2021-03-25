import { sound } from '../views/musicPage/Sound';
import { messagesReducer } from './messagesReducer';
import profileReducer from './profileReducer';
import { sidebarReducer } from './sidebarReducer';
import { musicReducer } from './musicReducer';

let store = {
  _state: {
    profilePage: null,
    messagesPage: {
      dialogsData: [
        { id: 1, name: 'Sveta Volkova' },
        { id: 2, name: 'Olya Kolobok' },
        { id: 3, name: 'Vlad Dimuch' },
        { id: 4, name: 'Sergey Komarov' },
      ],
      messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Ok' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
    musicPage: {
      musicData: sound,
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
    this._state.musicPage = musicReducer(this._state.musicPage, action);
  },
};

export default store;
window.store = store;
