import React from 'react';
import uid from 'node-uuid';
import Notes from './Notes.jsx';
//import Note from './Note.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

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
  }

  addNote() {
    this.setState({
      notes: [...this.state.notes, {
        id: uid.v4(),
        task: 'New task'
      }]
    });
  }

  editNote(id, task) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id && task) {
        note.task = task;
      }
      return note;
    });

    this.setState({notes});
  }

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id) // all but the note beign removed
    });
  }
}
