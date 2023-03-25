import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ourText, setOurText] = React.useState("")
  const msg = new SpeechSynthesisUtterance()

  const speechHandler = (msg: SpeechSynthesisUtterance) => {
    msg.text = ourText
    window.speechSynthesis.speak(msg)
  }

  return (
    <div className='App'>
      <h1>React Text to Speech App</h1>
      <textarea
        value={ourText}
        placeholder='Enter Text'
        onChange={(e) => setOurText(e.target.value)}
        rows={4}
      />
      <button onClick={() => speechHandler(msg)}>SPEAK</button>
    </div>
  )
}


export default App;
