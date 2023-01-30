import './App.css';
import Navbar from "./navbar"
import Contents from './Contents';
import { Routes, Route} from "react-router-dom";
import Deets from './pages/Deets';
import Event from './pages/Event';
import { useState } from 'react';


function App(props) {
  
  const [shoes] = useState(props.data)
  console.log(shoes);

  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <div className="cards">
        <div className="main-bg"></div>
        <div className="row">
          <Routes>
            <Route path="/" element={<Contents />} />
            <Route path="/deets" element={<Deets shoes={shoes} />}>
              <Route path=":id" element={<Deets shoes={shoes} />} />
            </Route>
            <Route path="/event" element={<Event />}>
              <Route
                path="one"
                element={<div>첫 주문시 양배추즙 서비스</div>}
              />
              <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}



export default App;
