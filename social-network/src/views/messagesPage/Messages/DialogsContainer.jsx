import { connect } from 'react-redux';
import { sendMessageCreator } from '../../../redux/messagesReducer';
import { Dialogs } from './Dialogs';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
