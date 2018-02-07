import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import Modal from 'react-modal';
import CommentForm from '../comments/comment_form_container';
import AddToAlbum from './add_to_album_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    }
};

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      photo: this.props.photo
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //
  componentDidMount(){
    this.props.requestPhoto(this.props.photoId);
    this.props.requestAlbums(this.props.currentUser.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.photoId !== newProps.match.params.photoId) {
      this.props.requestPhoto(newProps.match.params.photoId);
      this.props.requestAlbums(this.props.currentUser.id);
      }
      this.setState({photo: newProps.photo});
  }

  handleDelete(event){
    event.preventDefault();
    if(confirm("Are you sure you want to delete this picture?")){
      this.props.destroyPhoto(this.props.photo.id)
        .then( () => this.props.history.push('/home'));
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.editPhoto(this.state.photo)
      .then( () => this.closeModal());
  }

  update(field){
    return (event) => this.setState({
      photo: Object.assign({}, this.state.photo, { [field]: event.target.value })
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { photo, albums, currentUser, userAlbums } = this.props;
    return (
      (!photo || !albums || !userAlbums) ? <div></div> :
      <div className="overall-wrap">
      <div className="photo-show-container" >
        <div className="photo-show-image-container">
          <Image key={ photo.id } className="photo-show-image" publicId={ photo.img_url } cloudName="liquidpineapple" />
        </div>

      <div className="photo-show-info-container">

        <div className="photo-show-info-left">

          <div className="photo-show-info">
            <h1 className="photo-info-header">{photo.title}</h1>
            <h1>{photo.description}</h1>
            <h1 className="comment-author">Posted by: {photo.author}</h1>
          </div>

              { (currentUser === undefined || currentUser.id !== photo.author_id || albums === undefined || userAlbums[0] === undefined) ? <div></div> :
                <div className="album-cover-preview">
                  <h1 className="album-title">Currently in the following albums:</h1>
                      { albums.map( (album, idx) => (
                        <div key={ album.id } className="album-cover-box">
                          <Image className="album-thumb" publicId={userAlbums[album.id-1].album_cover_url} cloudName="liquidpineapple"></Image>
                          <h1 className="album-cover-text">{album.title}</h1>
                          <i onClick={() => this.props.deletePhotoAlbums(album.id, this.props.photoId)} className="album-trash-icon fa fa-trash-o" aria-hidden="true"></i>

                        </div>
                      )
                    )}
                </div>
              }

          <div className="add-to-album">
            <AddToAlbum userAlbums={userAlbums} />
          </div>

      </div>

        <div className="photo-show-info-right">
          <div className="photo-show-info">
          { (currentUser === undefined || currentUser.id !== photo.author_id) ? <div></div> :
            <div>
              <button onClick={this.openModal}>Edit Picture</button>
              <button onClick={this.handleDelete}>Delete Picture</button>
            </div>
          }

          <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Edit Modal"
            >
              <form className="modal-form" onSubmit={this.handleSubmit}>
                <label className="modal-label">Picture Title:</label>
                  <input
                    className="modal-input"
                    placeholder="Enter Title"
                    type="text"
                    onChange={this.update('title')}
                    value={this.state.photo.title} />
                <label className="modal-label">Picture Description:</label>
                  <textarea
                    className="modal-input"
                    placeholder="Enter Description"
                    value={this.state.photo.description}
                    onChange={this.update('description')} />
                <div className="modal-button-container">
                  <input
                    className="modal-button"

                    type="submit"
                    value="Save" />
                  <button className="modal-button" onClick={this.closeModal}>Cancel</button>
                </div>
              </form>
            </Modal>


            <h1 className="photo-info-header">Comments</h1>
            <CommentForm className="photo-comment-item" photo={photo} />
          </div>
        </div>
      </div>
      </div>
      </div>
    );

  }
}

export default PhotoShow;
