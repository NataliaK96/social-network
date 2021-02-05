import React from 'react';
import style from './Dialogs.module.scss';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { ContentBox } from '../../../components/ContentBox/ContentBox';
import { Redirect } from 'react-router-dom';
import { AddMessageFormRedux } from './AddMessageForm';

export const Dialogs = (props) => {
  let state = props.messagesPage;
  let messagesElement = state.messagesData.map((m) => (
    <div className={style.messageItem}>
      <Message message={m.message} />
    </div>
  ));
  let dialogsElements = state.dialogsData.map((d) => (
    <div className={style.dialogsItem}>
      <DialogItem name={d.name} id={d.id} />
    </div>
  ));

  let addNewMessage = (value) => {
    props.sendMessage(value.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/Login'} />;

  return (
    <ContentBox className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div className={style.messagesElement}>{messagesElement}</div>
        <div className={style.enterMessage}>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </ContentBox>
  );
};
