import { connect } from 'react-redux';
import { compose } from 'redux';
import { Friends } from './Friends';
import { getFriends, deleteFriend } from '../../../redux/friendsReducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getFriends: () => {
      dispatch(getFriends());
    },
    deleteFriend: (id) => {
      dispatch(deleteFriend(id));
    },
  };
};

export const FriendsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Friends);
