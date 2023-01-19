import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hour, setHour] = useState(0)

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
    setHour(0);
  }

  var time = null;

  useEffect(() => {
    time = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1)
        setSeconds(0)
      }
      if (minutes === 59) {
        setHour(hour + 1);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    //state updation for clean up function

    return () => clearInterval(time)
  })

  const stop = () => {
    clearInterval(time)
  }

  const start = () => {
    time = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1)
        setSeconds(0)
      }
      if (minutes === 59) {
        setHour(hour + 1);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
  }

  return (
    <div className="App">
      <div className="container">
        <p>
          {hour < 10 ? "0" + hour : hour}:
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </p>
        <div className="buttons">
          <button onClick={restart}>Restart</button>
          <button onClick={stop}>Stop</button>
          <button onClick={start}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default App;
