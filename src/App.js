import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LandingPageScreen, SinglePostScreen } from './screens';
import { Footer, Navbar } from './components';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
          <Route path='/' element = {<LandingPageScreen/>} />
          <Route path='post/:id' element = {<SinglePostScreen/>} />
      </Routes>
    <Footer />
    </main>
    </BrowserRouter>
  );
}

export default App;
