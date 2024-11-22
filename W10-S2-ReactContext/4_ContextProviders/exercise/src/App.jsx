import React, { useState, useContext } from 'react';
import Tweet from './components/Tweet';
import { UserContext } from './contexts/UserContext';

import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');
  //const [darkMode, setDarkMode] = useState(false); // State to track theme mode
  const { userName, themeColor, changeUser, toggleTheme} = useContext(UserContext);

  const handleInputChange = (e) => {
    setNewTweet(e.target.value);
  };

  const handlePostTweet = () => {
    if (newTweet.trim()) {
      const newTweetData = { content: newTweet };
      setTweets([newTweetData, ...tweets]);
      setNewTweet('');
    }
  };

  const appStyles = {
    width: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: themeColor==='dark' ? '#121212' : '#f9f9f9',
    color: themeColor==='dark' ? '#ffffff' : '#000000',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const buttonStyles = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    backgroundColor: '#1DA1F2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={appStyles}>
      <h1>Y!?</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>T' Dark Mode</label>
        <input type="checkbox" checked={themeColor==='dark'} onChange={toggleTheme} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <textarea
          value={newTweet}
          onChange={handleInputChange}
          placeholder="What's happening t' thee?"
          rows="3"
          style={{ width: '95%', padding: '10px', fontSize: '16px' }}
        />
        <button onClick={handlePostTweet} style={buttonStyles}>
          Send t' message
        </button>
      </div>
      <div>
        {tweets.map((tweet, index) => (
          <Tweet key={index} username={userName} content={tweet.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
