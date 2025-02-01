// RecordButton.js
import React, { useState } from 'react';

const RecordButton = ({ onTranscript }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const startRecording = () => {
    const newRecognition = new window.SpeechRecognition();
    newRecognition.lang = 'en-US';
    newRecognition.continuous = false;
    newRecognition.interimResults = false;

    newRecognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript); // Sending the transcribed text to parent component
    };

    newRecognition.start();
    setRecognition(newRecognition);
    setIsRecording(true);
  };

  const stopRecording = () => {
    recognition.stop();
    setIsRecording(false);
  };

  return (
    <div>
      {isRecording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
      )}
    </div>
  );
};

export default RecordButton;
