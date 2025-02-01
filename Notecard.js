// NoteCard.js
import React from 'react';

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note-card">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      {note.audioURL && <audio controls src={note.audioURL}></audio>}
      <div>
        <button onClick={() => onDelete(note.id)}>Delete</button>
        <button onClick={() => onEdit(note.id)}>Edit</button>
      </div>
    </div>
  );
};

export default NoteCard;
