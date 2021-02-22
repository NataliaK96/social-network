import profileReducer, { addPostActionCreator, deletePost } from '../redux/profileReducer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

let state = {
  postsData: [
    { id: 1, message: "It's my first post", likeCount: 12 },
    { id: 2, message: 'Hello friends!', likeCount: 20 },
    { id: 3, message: '^_^', likeCount: 128 },
    { id: 4, message: 'Good morning!', likeCount: 0 },
  ],
};

it('length of postsData should be incremented', () => {
  let action = addPostActionCreator('This is new post');
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(5);
});

it('message of new post should be correct', () => {
  let action = addPostActionCreator('This is new post');
  let newState = profileReducer(state, action);
  expect(newState.postsData[4].message).toBe('This is new post');
});

it('after deleting length of postsData should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
  });

  it(`after deleting length of postsData shouldn't be decremented if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
  });