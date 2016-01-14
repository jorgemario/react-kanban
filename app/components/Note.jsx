import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.renderEdit = this.renderEdit.bind(this);
    this.renderNote = this.renderNote.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.edit = this.edit.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }
    return this.renderNote();
  }

  renderEdit() {
    return (
      <input type="text"
             autoFocus={true}
             placeholder={this.props.task}
             onBlur={this.finishEdit}
             onKeyPress={this.checkEnter} />
    );
  }

  renderNote() {
    return (
      <div onClick={this.edit}>
        <span>{this.props.task}</span>
        {this.props.onDelete? this.renderDelete() : null}
      </div>
    );
  }

  edit() {
    this.setState({
      editing: true
    });
  }

  renderDelete() {
    return <button onClick={this.props.onDelete}>x</button>;
  }

  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
    if (this.props.onEdit) {
      this.props.onEdit(e.target.value);
    }

    this.setState({
      editing: false
    });
  }
}
