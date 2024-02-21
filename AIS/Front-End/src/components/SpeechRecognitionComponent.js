import React, { useState, useEffect, useRef } from 'react';
import styles from './SpeechRecognition.module.css'; // Import CSS module
import axios from 'axios';

const SpeechRecognitionComponent = ({setRemedyData, setLoading}) => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting form
    try {
        console.log({ "ailment_name": transcript });
        const response = await axios.post('http://localhost:5000/get-remedy-details', { "ailment_name": transcript });
        setRemedyData(response.data);
    } catch (error) {
      console.error('Error fetching herb data:', error);
    } finally {
        setLoading(false); // Set loading state to false after receiving response
    }
  };

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  const handleSearch = () => {
    // Implement your search logic here using the transcript state
    console.log('Search for:', transcript);
  };

  useEffect(() => {
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onstart = () => {
      setIsListening(true);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current.onresult = event => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      setTranscript(finalTranscript + interimTranscript);
    };

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  return (
    <>
    <div className={styles.speechRecognitionContainer}>
        <button
        onClick={toggleListen}
        className={`${styles.voiceSearchButton} ${isListening ? styles.voiceSearchButtonListening : ''}`}
      >
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>

      </div>
      <div>
      <textarea
        type="text"
        value={transcript}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Speak or type here..."
        className={styles.textAreaContainer}
      />
      </div>
      <div>
      <button onClick={handleSubmit} className={styles.searchButton}>Go</button>
    </div>
    </>
  );
};

export default SpeechRecognitionComponent;
