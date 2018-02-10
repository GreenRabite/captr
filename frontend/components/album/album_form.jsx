import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.album;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let album = this.state;
    if (this.props.formType === "new") {
      this.props.createAlbum(album).then(()=>this.props.fetchAlbums());
      this.props.history.push(`/albums`);
    }else {
      this.props.updateAlbum(album);
      this.props.history.push(`/albums/${this.props.match.params.albumId}`);
    }
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    let text = this.props.formType === "new" ? "Add a New Album!" : "Edit Your Album!";
    return(
      <div className="">
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
            <div>
              <button onClick={this.handleSubmit} className="main-bttn-form">Submit</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default AlbumForm;
