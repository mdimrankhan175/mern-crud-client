import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Code from './components/Code';
import EditUser from './components/EditUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';



function App() {
  return (
   <BrowserRouter>
       <NavBar />
       <Routes>
          <Route path='/' element={<Code />} />
          <Route path='/all' element={<AllUsers />} />
          <Route path='/add' element={ <AddUser />} />
          <Route path='edit/:id' element={ <EditUser/>} />
       </Routes>
   </BrowserRouter>
   
  );
}

export default App;
