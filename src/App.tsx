import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './portfolio/landing/components/projects/Projects'
import Landing from './portfolio/landing/Landing'
import Layout from './portfolio/layout/Layout'
import '../index.css'


function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} />
            {/* <Route path='/' element={<Landing />} />
            <Route path='/projects' element={<Projects />} /> */}
          {/* </Route> */}
        </Routes>
      </Router>
  )
}

export default App
