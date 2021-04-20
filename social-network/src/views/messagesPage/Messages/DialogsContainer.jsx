import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator } from '../../../redux/messagesReducer';
import { Dialogs } from './Dialogs';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { getFriends} from '../../../redux/messagesReducer';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getFriends: () => {
      dispatch(getFriends());
    },
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
