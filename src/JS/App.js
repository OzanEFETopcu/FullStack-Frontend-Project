import '../CSS/App.css';
import { useState, useRef }  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Tasks from "./Views/TaskPage/Tasks";
import Settings from "./Views/Settings";
import Info from "./Views/Info";


function App() {

  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to bottom right, rgb(58, 29, 29), rgb(120, 27, 27))');
  const backgroundRef = useRef('linear-gradient(to bottom right, rgb(58, 29, 29), rgb(120, 27, 27))');

  function onBackgroundChange() {
    if (backgroundColor === 'linear-gradient(to bottom right, rgb(58, 29, 29), rgb(120, 27, 27))') {
      setBackgroundColor('linear-gradient(to bottom right, rgb(167, 102, 102), rgb(32, 27, 120))');
    } else {
      setBackgroundColor('linear-gradient(to bottom right, rgb(58, 29, 29), rgb(120, 27, 27))');
    }
    backgroundRef.current = backgroundColor;
  };

  return (
    <div className='app' style={{ backgroundImage: backgroundRef.current }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings onBackgroundChange = {onBackgroundChange}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
