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
};

export const messagesReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
          ...state,
          messagesData: [ ...state.messagesData, { id: 5, message: body }],
        };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

