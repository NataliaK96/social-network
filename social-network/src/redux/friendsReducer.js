import { friendsData } from '../views/friendsPage/Friends/Friends';

const SET_FRIENDS = 'SET-FRIENDS';

let initialState = { friendsData: friendsData };

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS: {
      return {
        ...state,
        friendsData: action.friendsData,
      };
    }
    default:
      return state;
  }
};

export const setFriends = (friendsData) => ({ type: SET_FRIENDS, friendsData });
