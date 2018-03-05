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
    debugger;
    if (this.state.value === "newalbum") {
      debugger;
      this.props.createAlbum({
        title: this.state.albumTitle,
        description: this.state.albumDescription
      }).then(()=>this.props.createPhotoBrandNewAlbum({
        title: this.state.title,
        description: this.state.description,
        img_url: this.state.img_url
      }));
    }else {
      this.props.createPhotoNewAlbum({
        title: this.state.title,
        description: this.state.description,
        img_url: this.state.img_url,
        value: parseInt(this.state.value)
      });
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
        return <option key={album.id} value={album.id}>{album.title}</option>;
        });
    }
    if (this.state.value === "newalbum") {
      NewAlbumForm = (
        <div className="">
          <input onChange={this.updateInput("albumTitle")} placeholder="Album Title" value={this.state.albumTitle}></input><br/>
          <input
            className=""
            onChange={this.updateInput("albumDescription")}
            placeholder="Album Description"
            value={this.state.albumDescription}/>
        </div>
      )
    }
    return(
      <div className="upload-overlay">
        <div className="photo-upload-container">
          <form className="">
            <div className="">
              <input onChange={this.updateInput("title")} placeholder="Photo Title" value={this.state.title}></input><br/>
              <input
                className=""
                onChange={this.updateInput("description")}
                placeholder="Description"
                value={this.state.description}/>
            </div>
            <button className="" onClick={this.uploadImage}>Upload Photo</button>
            <select onChange={this.changeOption} value={this.state.value} name="albums-name">
              <option value="Please choose an album to upload to" selected disabled>Please choose an album to upload to</option>
              {AlbumListItems ? AlbumListItems : ""}
              <option value="newalbum">Create a New Album</option>
            </select>
            {NewAlbumForm}
            <div onClick={this.handleSubmit}>
              <button className="">Submit</button> <br/>
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

export default PhotoUpload;
