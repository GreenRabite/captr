import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import AlbumFormContainer from './../album/album_form_container';


class AlbumModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: true
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount(){
    ReactModal.setAppElement('#root');
    this.setState({ showModal: true });
  }

  componentWillReceiveProps(){
    this.setState({ showModal: true });
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
            className="Modal-photo-form animated fadeIn"
            overlayClassName="Overlay-photo-form"
            shouldCloseOnOverlayClick={true}
            >
            <AlbumFormContainer/>
          </ReactModal>
        </div>
      </div>
    );
  }
}


export default AlbumModal;
