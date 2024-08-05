// import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Startup from './components/startup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Business from './components/bsiness';
import Politics from './components/politics';
import Sports from './components/sports';
import Technology from './components/technology';
import World from './components/world';
import Bollywood from './components/bollywood';
import Hollywood from './components/hollywood';

function App() {
  return (<>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/startup' element={<Startup />} />
        <Route path='/business' element={<Business />} />
        <Route path='/politics' element={<Politics />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/world' element={<World />} />
        <Route path='/bollywood' element={<Bollywood />} />
        <Route path='/hollywood' element={<Hollywood />} />

      </Routes>
    </BrowserRouter></>
  );
}

export default App;
