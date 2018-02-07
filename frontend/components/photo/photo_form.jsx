import React from 'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photo;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state);
    this.setState({
      title: "",
      description: ""
    });
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
    return(
      <div className="photo-upload-bg">
        <div className="photo-form centered">
          <div className="photo-form-header">Upload a New Photo!</div>
          <form className="photo-form-main">
            <div className="photo-form-content">
              <input onChange={this.updateInput("title")} placeholder="Title" value={this.state.title}></input><br/>
              <input
                className="photo-form-text-body"
                onChange={this.updateInput("description")}
                placeholder="Description"
                value={this.state.description}/>
            </div>
            <img src={this.state.img_url ? this.state.img_url : `` } />
            <button className="bttn-gradient" onClick={this.uploadImage}>Upload Photo</button>
            <div className="photo-form-btn-bar">
              <button className="photo-form-btn-close">Close</button>
              <button onClick={this.handleSubmit} className="photo-form-btn-post">Submit</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default PhotoForm;
