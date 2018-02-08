import React from 'react';
import ReactModal from 'react-modal';
import CommentFormItem from './comment_form_item';

class CommentForm extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount(){
    ReactModal.setAppElement('#root');

  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <div className="modal-container">
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
            shouldCloseOnOverlayClick={true}
            >
            <div><CommentFormItem props={this.props} match = {this.props.match} handleCloseModal= {this.handleCloseModal}/></div>
          </ReactModal>
          <div className="add-comment-box"><button className="main-bttn" onClick={()=>this.handleOpenModal()}>Add A Comment!</button></div>
        </div>
      </div>
    );
  }
}

export default CommentForm;
