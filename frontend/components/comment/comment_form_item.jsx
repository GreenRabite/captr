import React from 'react';

class CommentFormItem extends React.Component {
  constructor({props}) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.comment);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.formType === "update") {
      this.props.updateComment(this.state);
    }else {
      const comment = this.state;
      const photoId = parseInt(this.props.match.params.photoId);
      this.props.props.createComment((comment),photoId).then(()=>
      (this.props.handleCloseModal()));
    }
  }

  render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Comment: <br/>
            <input type="text" onChange={this.update('body')} value={this.state.body} />
          </label><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentFormItem;
