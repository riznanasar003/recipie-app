import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddRecipie from './Components/AddRecipie';
import Search from './Components/Search';
import Delete from './Components/Delete';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddRecipie/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
