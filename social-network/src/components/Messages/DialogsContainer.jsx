import React from 'react';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/messagesReducer';
import {Dialogs} from './Dialogs'

export const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;
  
  let onSentMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSentMessageClick} 
  messagesPage={state}/>);
};
