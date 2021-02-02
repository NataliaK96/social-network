import React from 'react';
import style from './ProfileInfo.module.scss';

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = (event) => {
    if (event.charCode === 13) {
      this.setState({ editMode: false });
      this.props.updateStatus(this.state.status);
    }
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  };

  render() {
    return (
      <div className={style.status}>
        {!this.state.editMode ? (
          <div onClick={this.activateEditMode}>{this.props.status}</div>
        ) : (
          <div>
            <input
              className={style.statusInput}
              onChange={this.onStatusChange}
              autoFocus={true}
              onKeyPress={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
