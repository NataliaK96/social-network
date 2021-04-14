import React, { useEffect } from 'react';
import style from './Dialogs.module.scss';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { ContentBox } from '../../../components/ContentBox/ContentBox';
import { AddMessageFormRedux } from './AddMessageForm';

export const Dialogs = ({ messagesPage, getFriends, sendMessage }) => {
  useEffect(() => {
    getFriends();
  }, [getFriends]);

  const messagesElement =
    messagesPage &&
    messagesPage.messagesData.map((m) => (
      <div className={style.messageItem}>
        <Message message={m.message} />
      </div>
    ));

  const dialogsElements =
    messagesPage &&
    messagesPage.friendsData.map((f) => {
      return (
        <div className={style.dialogsItem}>
          <DialogItem name={f.fullName} src={f.photos.small} id={f.userId} />
        </div>
      );
    });

  let addNewMessage = (value) => {
    sendMessage(value.newMessageBody);
  };

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
