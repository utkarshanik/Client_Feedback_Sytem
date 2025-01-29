import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sign from './Components/Sign';
import Admin from './Components/Admin';
import Feedback from './Components/Feedback';
import MainPage from './Components/MainPage';
import Userresponse from './Components/Userresponse';

function App() {
  return (
   <>
     <Router>
      <Routes>
        <Route path="/" element={<Sign />} />
        {/* <Route path="/" element={<Admin />} /> */}
        {/* <Route path="/" element={<Userresponse />} /> */}
        <Route path="/userresponse" element={<Userresponse />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/mainpage" element={<MainPage/>} />
      </Routes>
    </Router>
      {/* <Sign/> */}
      {/* <Login/> */}
  </>
  );
}

export default App;
