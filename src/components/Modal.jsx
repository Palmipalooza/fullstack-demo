import React from 'react';

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
      return <div>Look at the Modal</div>
  }
}

export default Modal;