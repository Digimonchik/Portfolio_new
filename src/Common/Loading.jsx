import React from 'react';

class LoadingCircle extends React.Component {
  render() {
    return (
      <div className="loading-circle-container">
        <div className="loading-circle"></div>
        <p className="loading-text">{this.props.loadingText}</p>
      </div>
    );
  }
}

export default LoadingCircle;