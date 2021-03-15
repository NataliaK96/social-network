import { sound } from '../views/musicPage/Sound';

const SET_MUSIC = 'SET-MUSIC';

let initialState = { musicData: sound };

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC: {
      return {
        ...state,
        musicData: action.musicData,
      };
    }
    default:
      return state;
  }
};

export const setMusic = (musicData) => ({ type: SET_MUSIC, musicData });
