import { addPostActionCreator, deletePost } from '../../../../redux/profileReducer';
import { Posts } from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
    userAvatarSmall: state.profilePage.profile.photos && state.profilePage.profile.photos.small
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
    deletePost: (id)=> {
      dispatch(deletePost(id))
    }
  };
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
