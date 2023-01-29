import './App.css';
import Navbar from "./navbar"
import Contents from './Contents';
import { Routes, Route} from "react-router-dom";
import Deets from './pages/Deets';

function App(props) {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <div className="cards">
        <div className="main-bg"></div>
        <div className="row">
          <Routes>
            <Route path="/" element={<Contents />}>
              <Route path='/:id' element={<Contents />} />
            </Route>
            <Route path="/deets" element={<Deets />}>
              <Route path='/deets/:id' element={<Deets />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}



export default App;
