import React from 'react';
import CommentShowContainer from './../comment/comment_show_container';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhotoComments(this.props.match.params.photoId).
    then(this.props.fetchPhoto(this.props.match.params.photoId)
    );
  }


  render(){
    if (!this.props.photo) {
      return null;
    }
    let photo = this.props.photo;
    return(
      <div>
        <div className="photo-show-main-container">
          <div className="photo-show-container">
            <img src={`${this.props.photo.img_url}`} />
            <h3>{`${this.props.photo.title}`}</h3>
          </div>
        </div>
        <div className="photo-show-user-info">
          <img src={photo.owner_pro_img ? `${this.props.photo.owner_pro_img}` : "https://i.stack.imgur.com/IHLNO.jpg"}></img>
          <div className="photo-user-headers">
            <h4>{`${photo.owner}`}</h4>
          </div>
          <button className="bttn-gradient follow-user-bttn">Follow Me</button>
        </div>
        <div className="comment-form-containers">
          <CommentShowContainer />
        </div>
      </div>
    );
  }
}


export default PhotoShow;
