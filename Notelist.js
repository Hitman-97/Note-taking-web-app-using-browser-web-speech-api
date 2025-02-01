// NoteList.js
import React, { useState } from 'react';
import NoteCard from './NoteCard';

const NoteList = ({ notes, onDelete, onEdit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
