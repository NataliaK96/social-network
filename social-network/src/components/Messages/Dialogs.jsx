import React from 'react';
import style from './Dialogs.module.scss';
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'

export const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Sveta'},
    {id: 2, name: 'Olya'},
    {id: 3, name: 'Vlad'},
    {id: 4, name: 'Sergey'}
  ]
  
  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Ok'}
  ]
  
  let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)

  let messagesElement = messagesData.map( m => <Message message={m.message}/> )

  return (
    <div className = {style.dialogs}>
      <div className={style.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElement}
      </div>
    </div>
  );
};
