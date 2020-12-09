const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: "It's my first post", likeCount: 12 },
    { id: 2, message: 'Ho ho ho!', likeCount: 20 },
  ],
  newPostText: 'Enter text',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      return {
          ...state,
          postsData : [...state.postsData, newPost],
         newPostText : ''
        }     
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
          ...state,
          newPostText : action.newText
        }
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
