import { profileAPI } from '../api/api';
const SEND_MESSAGE = 'SEND-MESSAGE';
const SET_FRIENDS = 'SET-FRIENDS';

let initialState = {
  friendsData: [],
  messagesData: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
  ],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS: {
      return {
        ...state,
        friendsData: action.friendsData,
      };
    }
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: new Date().getTime(), message: body },
        ],
        newMessageBody: '',
      };
    }
    default:
      return state;
  }
};
export const setFriends = (friendsData) => ({ type: SET_FRIENDS, friendsData });
export const getFriends = () => {
  const friendIds = [{ id: 13902 }, { id: 13336 }];
  return async (dispatch) => {
    let [friend1, friend2] = await Promise.all([
      profileAPI.getProfile(friendIds[0].id),
      profileAPI.getProfile(friendIds[1].id),
    ]);

    dispatch(setFriends([friend1.data, friend2.data]));
  };
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
