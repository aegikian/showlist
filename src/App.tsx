import { Route, Routes } from 'react-router';
import './App.css';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import ShowroomList from './components/ShowroomList';
import { ShowroomPage } from './components/ShowroomPage';
import { Start } from './components/Start';

function App() {
  return (
    <div className="App">
      <header className='header_app'>
        <Nav/>
      </header>
      <Routes>
        <Route path="/showrooms" element={<ShowroomList />} />
        <Route path="/showroom/:id" element={<ShowroomPage />} />
        <Route path="/" element={<Start />}/>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
