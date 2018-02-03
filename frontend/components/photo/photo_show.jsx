import React from 'react';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhoto(this.props.match.params.photoId);
    debugger;
  }

  render(){
    debugger;
    if (!this.props.photo) {
      return null;
    }
    return(
      <div>
        <div className="photo-show-container">
          <h1>"Im the photo show!"</h1>
          <img src={`${this.props.photo.img_url}`}></img>
        </div>
      </div>
    );
  }
}


export default PhotoShow;
