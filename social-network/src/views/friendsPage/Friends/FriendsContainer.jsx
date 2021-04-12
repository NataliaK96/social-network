import { connect } from 'react-redux';
import { compose } from 'redux';
import { Friends } from './Friends';
import { setFriends } from '../../../redux/friendsReducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setFriends: (newFriendsData) => {
      dispatch(setFriends(newFriendsData));
    },
  };
};

export const MusicContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Friends);