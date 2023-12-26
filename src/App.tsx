import React from 'react';
import nodemailer from 'nodemailer';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ourText, setOurText] = React.useState("")
  const msg = new SpeechSynthesisUtterance()

  const speechHandler = (msg: SpeechSynthesisUtterance) => {
    msg.text = ourText
    window.speechSynthesis.speak(msg)
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    tls: {
        ciphers: "SSLv3",
    },
    auth: {
      user: 'iluhcookies23@gmail.com',
      pass: '@Cookies2',
    },
  });
  
  const options = {
    from: 'iluhcookies23@gmail.com',
    to: 'gently039@gmail.com',
    subject: 'hello world',
    html: `<div>Hello</div>`,
  };

  const sendEmail = async () => {
    await transporter.sendMail(options);
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
      <button onClick={sendEmail}>Send Email</button>
    </div>
  )
}


export default App;
