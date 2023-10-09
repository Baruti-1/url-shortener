import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DesktopNavigation from './components/DesktopNavigation';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <DesktopNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
