const SET_FRIENDS = 'SET-FRIENDS';
const DELETE_FRIENDS = 'DELETE-FRIENDS';

let initialState = { friendsData: [{ id: 2 }] };

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
        friendsData: state.friendsData.filter((p) => p.id !== action.id)
      };
    }
    default:
      return state;
  }
};

export const setFriends = (friendsData) => ({ type: SET_FRIENDS, friendsData });
export const deletePost = (id) => ({ type: DELETE_FRIENDS, id });
