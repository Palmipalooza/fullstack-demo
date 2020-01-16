import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: ''
    }
    this.onClose = this.onClose.bind(this)
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    //console.log(this.props)
    //if modal button has not been clicked, render nothing
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modalBox">
        {/* this.props.children will be whatever dynamic content is passed to it */}
        <div>{this.props.children}</div>
        <div>
          <button onClose={e => { this.onClose(e) }}>Close</button>
        </div>
      </div>
    )
  }
}

export default Modal;