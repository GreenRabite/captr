import React from 'react';
import CommentShowContainer from './../comment/comment_show_container';
import CommentForm from './../comment/comment_form';
import { HashLink as Link } from 'react-router-hash-link';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  componentDidMount(){
    this.props.fetchPhotoComments(this.props.match.params.photoId).
    then(this.props.fetchPhoto(this.props.match.params.photoId)
    );
  }

  deletePhoto(){
    if (window.confirm("Are you sure you want to delete this?")) {
      (this.props.deletePhoto(this.props.match.params.photoId)).then(()=>
      this.props.history.push(`/home`));
    }
  }


  render(){
    if (!this.props.photo) {
      return null;
    }
    let photo = this.props.photo;
    let hiddenItem;
    if (parseInt(this.props.currentUser.id) === this.props.photo.owner_id) {
      hiddenItem = (
        <div className="delete-bttn-container" >
          <Link to={`/photos/${this.props.match.params.photoId}/edit`}><button className="main-bttn photo-bttn">Edit</button></Link>
          <button onClick={this.deletePhoto} className="main-bttn photo-bttn">Delete</button>
        </div>
      );
    }
    return(
      <div>
        <div className="photo-show-main-container">
          <div className="photo-show-container">
            <img src={`${this.props.photo.img_url}`} />
            <h3>{`${this.props.photo.title}`}</h3>
          </div>
        </div>
        <div className="information-nav">
          <div className="photo-show-user-info">
            <img src={photo.owner_pro_img ? `${this.props.photo.owner_pro_img}` : "https://i.stack.imgur.com/IHLNO.jpg"}></img>
            <div className="photo-user-headers">
              <h4>{`${photo.owner}`}</h4>
            </div>
            <Link to={`/photos/${photo.id}#comments`} className="main-bttn-form follow-user-bttn">Comments</Link>
          </div>
          {hiddenItem}
        </div>
        <div className="comment-form-containers">
          <CommentShowContainer />
        </div>
        <a id="comments"></a>
      </div>
    );
  }
}


export default PhotoShow;
