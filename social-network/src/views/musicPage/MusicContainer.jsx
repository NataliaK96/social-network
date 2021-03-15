import { connect } from 'react-redux';
import { compose } from 'redux';
import { Music } from './Music';
import { setMusic } from '../../redux/musicReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    console.log('mapStateToProps',state )
  return {
    musicPage: state.musicPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setMusic: (newMusicData) => {
      dispatch(setMusic(newMusicData));
    },
  };
};

export const MusicContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Music);