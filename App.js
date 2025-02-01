// App.js
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import RecordButton from './components/RecordButton';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [audioURL, setAudioURL] = useState(null);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: noteTitle,
      content: noteContent,
      audioURL: audioURL,
    };
    setNotes([...notes, newNote]);
    setNoteContent('');
    setNoteTitle('');
    setAudioURL(null);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleEdit = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setNoteTitle(noteToEdit.title);
    setNoteContent(noteToEdit.content);
    setAudioURL(noteToEdit.audioURL);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleTranscript = (transcript) => {
    setNoteContent(transcript);
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <div>
        <input
          type="text"
          placeholder="Note Title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          placeholder="Note Content"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        />
        <RecordButton onTranscript={handleTranscript} />
        <button onClick={addNote}>Add Note</button>
      </div>
      <NoteList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
