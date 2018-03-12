import React from 'react';
import CommentShowContainer from './../comment/comment_show_container';
import CommentForm from './../comment/comment_form';
import { HashLink as Link } from 'react-router-hash-link';
import TagsInput from 'react-tagsinput';


class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.state = {tags: []};
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

  handleChange(tags){
    this.setState({tags});
  }

  //<Link to={`/photos/${photo.id}#comments`} className="main-bttn-form follow-user-bttn">Comments</Link>

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
          </div>
        </div>
        <div className="information-nav">
          <div className="photo-show-user-info">
            <img src={photo.owner_pro_img ? `${this.props.photo.owner_pro_img}` : "https://i.stack.imgur.com/IHLNO.jpg"}></img>
            <div className="photo-user-headers">
              <h4>{`${photo.owner}`}</h4>
            </div>

            <div className="title-holder">
              <div>
                <div className="photo-show-title">{`${this.props.photo.title}`}</div >
                <div className="photo-show-description">{this.props.photo.description !== null ? `${this.props.photo.description}` : ""}</div >
              </div>
            </div>
          </div>
          {hiddenItem}
        </div>
        <div className="bottom-form-container">
          <div className="comment-form-containers">
            <CommentShowContainer />
          </div>
          <a id="comments"></a>
        </div>
        <div className="tags-container">
          <h1></h1>
        </div>
      </div>
    );
  }
}


export default PhotoShow;
