import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClientProfile from './pages/ClientProfile';
import EnrollClient from './pages/EnrollClient';
import RegisterClient from './pages/RegisterClient';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Client from './pages/Client';

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <div className='container  mt-4'>
        <Routes>
          <Route path='/' component={<Home />} />
          <Route path='/programs' component={<Programs />} />
          <Route path='/clients' component={<Client />} />
          <Route path='/clients/register' component={<RegisterClient />} />
          <Route path='/clients/:clientId/enroll' component={<EnrollClient />} />
          <Route path='/clients/:clientId/profile' component={<ClientProfile />} />
        </Routes>
      </div>
    </>
  )
}

export default App
