import React from 'react';

class PhotoUpload extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.changeOption = this.changeOption.bind(this);
    this.state = {
      title: "",
      description: "",
      albumTitle: "",
      albumDescription: ""
    };
  }

  componentDidMount(){
    this.props.fetchUserAlbums(this.props.currentUser.id);
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

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value === "newalbum") {
      this.props.createAlbum({
        title: this.state.albumTitle,
        description: this.state.albumDescription
      }).then(()=>this.props.createPhotoBrandNewAlbum({
        title: this.state.title,
        description: this.state.description,
        img_url: this.state.img_url
      }));
      this.props.history.push(`/albums`);
    }else {
      this.props.createPhotoNewAlbum({
        title: this.state.title,
        description: this.state.description,
        img_url: this.state.img_url,
        value: parseInt(this.state.value)
      }).then(()=>this.props.history.push(`/albums/${this.state.value}`));
    }
  }

  changeOption(e){
    this.setState({
      value : e.target.value
    });
  }

  render(){
    let AlbumListItems;
    let NewAlbumForm;
    let albums = Object.values(this.props.albums);
    if (albums[0]) {
      AlbumListItems = albums.map((album)=>{
        return <option key={album.id} className="options-list" value={album.id}>{album.title}</option>;
        });
    }
    if (this.state.value === "newalbum") {
      NewAlbumForm = (
        <div className="">
          <input className="form-text-body" onChange={this.updateInput("albumTitle")} placeholder="Album Title" value={this.state.albumTitle}></input><br/>
          <input
            className="form-text-body"
            onChange={this.updateInput("albumDescription")}
            placeholder="Album Description"
            value={this.state.albumDescription}/>
        </div>
      );
    }
    return(
      <div className="bg-upload">
          <div className="upload-overlay">
            <div className="photo-upload-container animated fadeIn">
              <form className="">
                <div className="form-container">
                  <div className="photo-upload-xform"><h1><b>Photo Upload</b></h1></div>
                  <input className="form-text-body" onChange={this.updateInput("title")} placeholder="Photo Title" value={this.state.title}></input>
                  <input
                    className="form-text-body"
                    onChange={this.updateInput("description")}
                    placeholder="Description"
                    value={this.state.description}/>
                  <button className="main-bttn-form-upload" onClick={this.uploadImage}>Upload A Photo</button> <br/> <br/>
                  <div className="select-container">
                    <div className="photo-upload-xform"><b>Choose An Album To Upload To</b></div>
                  <div className="select-boxes">
                    <select onChange={this.changeOption} value={this.state.value} name="albums-name">
                      <option value="Please choose an album to upload to" selected disabled>CHOOSE AN ALBUM</option>
                      {AlbumListItems ? AlbumListItems : ""}
                      <option value="newalbum">CREATE A NEW ALBUM</option>
                    </select>
                  </div>
                  {NewAlbumForm}
                </div>
                <div onClick={this.handleSubmit}>
                  <button className="main-bttn-form-upload">Submit</button> <br/>
                </div>
                <div className="img-container2">
                  <img className="imgSource2"src={ this.state.img_url } />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoUpload;
