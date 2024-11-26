import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Report from './Report';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Report />} />
      {/* <Route path="/report" element={<Report/>} /> */}

      </Routes>
      </BrowserRouter>
      
        
        {/* <Route
          path="contacts/:id/edit"
          element={<EditContact />}
        /> */}
      
    </div>
  );
}

export default App;
