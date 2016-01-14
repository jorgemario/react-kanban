var React = require('react');

var Note = React.createClass({

  getInitialState() {
    return {
      editing: false
    };
  },

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }
    return this.renderNote();
  },

  renderEdit() {
    return (
      <input type="text"
             autoFocus={true}
             placeholder={this.props.task}
             onBlur={this.finishEdit}
             onKeyPress={this.checkEnter} />
    );
  },

  renderNote() {
    return (
      <div onClick={this.edit}>
        <span>{this.props.task}</span>
        {this.props.onDelete? this.renderDelete() : null}
      </div>
    );
  },

  edit() {
    this.setState({
      editing: true
    });
  },

  renderDelete() {
    return <button onClick={this.props.onDelete}>x</button>;
  },

  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  },

  finishEdit(e) {
    if (this.props.onEdit) {
      this.props.onEdit(e.target.value);
    }

    this.setState({
      editing: false
    });
  }

});

module.exports = Note;
