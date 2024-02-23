import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import CV from './Components/CV/CV'
import Projects from './Components/Projects/Projects'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout /> }>
          <Route path='/' element={<CV />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
