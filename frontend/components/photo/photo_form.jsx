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
      this.props.createPhoto({photo});
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

  photoImage(url) {
    this.setState({ ["img_url"]: url });
  }

  uploadImage(e) {
    e.preventDefault();
    window.photoImage = this.photoImage.bind(this);
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(errors, result){
        window.photoImage(result[0].url);
      }
    );
  }

  render() {
    let text = this.props.formType === "new" ? "Upload a New Photo!" : "Edit Your Picture";
    return(
      <div className="appBG">
        <div className="photo-form centered">
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
            <button className="main-bttn" onClick={this.uploadImage}>Upload Photo</button>
            <div className="photo-form-btn-bar">
              <button onClick={this.handleSubmit} className="main-bttn">Submit</button>
              <img className="imgSource"src={this.state.img_url ? this.state.img_url : `` } />
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default PhotoForm;
