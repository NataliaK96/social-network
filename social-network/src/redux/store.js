import  {messagesReducer}  from './messagesReducer';
import  profileReducer from './profileReducer';
import  {sidebarReducer}  from './sidebarReducer';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "It's my first post", likeCount: 12 },
        { id: 2, message: 'Ho ho ho!', likeCount: 20 },
      ],
      newPostText: 'Enter text',
    },
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
  },
};

export default store;
window.store = store;
