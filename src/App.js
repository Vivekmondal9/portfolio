import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
