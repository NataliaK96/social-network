import { addPostActionCreator } from '../../../../redux/profileReducer';
import { Posts } from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
