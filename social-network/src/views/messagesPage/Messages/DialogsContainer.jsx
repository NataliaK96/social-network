import { connect } from 'react-redux';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../../redux/messagesReducer';
import { Dialogs } from './Dialogs';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)