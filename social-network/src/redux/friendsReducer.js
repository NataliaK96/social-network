import { profileAPI } from '../api/api';
const SET_FRIENDS = 'SET-FRIENDS';
const DELETE_FRIENDS = 'DELETE-FRIENDS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = { friendsData: [], isFetching: true };

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS: {
      return {
        ...state,
        friendsData: action.friendsData,
      };
    }
    case DELETE_FRIENDS: {
      return {
        ...state,
        friendsData: state.friendsData.filter((p) => p.userId !== action.id),
      };
    }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setFriends = (friendsData) => ({ type: SET_FRIENDS, friendsData });
export const deleteFriend = (id) => ({ type: DELETE_FRIENDS, id });
export const getFriends = () => {
  const friendIds = [{ id: 13902 }, { id: 13336 }];
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let [friend1, friend2] = await Promise.all([
      profileAPI.getProfile(friendIds[0].id),
      profileAPI.getProfile(friendIds[1].id),
    ]);

    dispatch(toggleIsFetching(false));
    dispatch(setFriends([friend1.data, friend2.data]));
  };
};
