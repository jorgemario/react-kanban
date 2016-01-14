var React = require('react');
var Note = require('./Note.jsx');

module.exports = ({notes, onEdit, onDelete}) => {
  return (
    <ul>{notes.map((note) =>
      <li key={note.id}>
        <Note task={note.task}
              onEdit={onEdit.bind(null, note.id)}
              onDelete={onDelete.bind(null, note.id)} />
      </li>
    )}</ul>
  );
}
