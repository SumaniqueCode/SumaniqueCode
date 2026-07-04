import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import '../index.css';

const Landing = lazy(() => import('./portfolio/Landing'));
const Commands = lazy(() => import('./commands/Commands'));
const AllProjects = lazy(() => import('./projects/AllProjects'));
const ProjectDetailCard = lazy(() => import('./projects/Components/ProjectDetailCard'));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Landing />} />
            <Route path='commands' element={<Commands />} />
            <Route index element={<Navigate to="home" replace />} />
            <Route path = 'projects' element={<AllProjects />} />
            <Route path = 'project/:id' element={<ProjectDetailCard />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
