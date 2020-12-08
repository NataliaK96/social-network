const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Sveta Volkova' },
    { id: 2, name: 'Olya Kolobok' },
    { id: 3, name: 'Vlad Dimuch' },
    { id: 4, name: 'Sergey Komarov' },
  ],
  messagesData: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Ok' },
  ],
  newMessageBody: '',
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {...state}
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }

    case SEND_MESSAGE: {
      let stateCopy = {...state}
      let body = stateCopy.newMessageBody;
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push({ id: 5, message: body });
      stateCopy.newMessageBody = '';
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});