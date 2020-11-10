let store = {
  profilePage: {

    postsData: [
      { id: 1, message: "It's my first post", likeCount: 12 },
      { id: 2, message: 'Ho ho ho!', likeCount: 20 },
    ],
  },

  messagesPage: {
      
    dialogsData: [
      { id: 1, name: 'Sveta' },
      { id: 2, name: 'Olya' },
      { id: 3, name: 'Vlad' },
      { id: 4, name: 'Sergey' },
    ],

    messagesData: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Ok' },
    ],
  },
};

export default store;
