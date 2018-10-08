import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photo;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let photo = this.state;
    if (this.props.formType === "new") {
      this.props.createPhoto({photo}).then(()=>(this.props.fetchAlbum(this.props.match.params.albumId)));
      this.props.history.push(`/albums/${this.props.match.params.albumId}`);
    }else {
      this.props.updatePhoto(photo);
      this.props.history.push(`/photos/${this.props.match.params.photoId}`);
    }
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  photoImage(url1,url2) {
    this.setState({
      ["img_url"]: url1,
      ["thumb_url"] : url1
     });
  }

  uploadImage(e) {
    e.preventDefault();
    window.photoImage = this.photoImage.bind(this);
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(errors, result){
        window.photoImage(result[0].secure_url, result[0].thumbnail_url);
      }
    );
  }

  render() {
    let text = this.props.formType === "new" ? "Upload a New Photo!" : "Edit Your Picture";
    return(
      <div className="appBG">
        <div className="centered">
          <div className="flex-box-container"><div className="x-icon" onClick={this.props.handleCloseModal}>X</div></div>
          <div className="photo-form-header">{text}</div>
          <form className="photo-form-main">
            <div className="photo-form-content">
              <input onChange={this.updateInput("title")} placeholder="Title" value={this.state.title}></input><br/>
              <input
                className="photo-form-text-body"
                onChange={this.updateInput("description")}
                placeholder="Description"
                value={this.state.description}/>
            </div>
            <div className="photo-form-bttn-box">
              <button className="main-bttn-form" onClick={this.uploadImage}>Upload</button>
              <div onClick={this.handleSubmit}>
                <button className="main-bttn-form">Submit</button> <br/>
              </div>
            </div>
            <div className="img-container">
              <img className="imgSource"src={this.state.img_url ? this.state.img_url : "" } />
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default PhotoForm;
