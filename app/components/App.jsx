var React = require('react');
var uid = require('node-uuid');
var Notes = require('./Notes.jsx');

var App = React.createClass({

  getInitialState() {
    return {
      notes : [
        {
          id: uid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uid.v4(),
          task: 'Learn React'
        },
        {
          id: uid.v4(),
          task: 'Do laundry'
        },
        {
          id: uid.v4(),
          task: 'Learn scala and akka 2'
        }
      ]
    };
  },

  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes}
               onEdit={this.editNote}
               onDelete={this.deleteNote} />
      </div>
    );
  },

  addNote() {
    this.setState({
      notes: [...this.state.notes, {
        id: uid.v4(),
        task: 'New task'
      }]
    });
  },

  editNote(id, task) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id && task) {
        note.task = task;
      }
      return note;
    });

    this.setState({notes});
  },

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id) // all but the note beign removed
    });
  }

});

module.exports = App;
