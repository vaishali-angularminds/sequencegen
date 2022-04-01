
import './App.css';
import Welcome from './Components/Welcome'
import Home from './Components/Home'
import Temp from './Components/Temp'

import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
{/* 
      <Route exact path="/">
         <Navigate replace to="/welcome" />
         </Route> */}

         <Route path="/*" element={<Navigate to="/welcome" />}></Route>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
       <Route path="/Temp" element={<Temp />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
