import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClientProfile from './pages/ClientProfile';
import EnrollClient from './pages/EnrollClient';
import RegisterClient from './pages/RegisterClient';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Client from './pages/Client';
import CreateProgram from './pages/CreateProgram';

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <div className='container  mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/clients' element={<Client />} />
          <Route path='/clients/register' element={<RegisterClient />} />
          <Route path='/clients/:clientId/enroll' element={<EnrollClient />} />
          <Route path='/clients/:clientId/' element={<ClientProfile />} />
          <Route path='/programs/create-program' element={<CreateProgram />} />
        </Routes>
      </div>
    </>
  )
}

export default App
