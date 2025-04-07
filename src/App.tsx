import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import '../index.css';
import Landing from './portfolio/landing/Landing';
import Commands from './commands/Commands';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Landing />} />
          <Route path='commands' element={<Commands />} />
          <Route index element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
