import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './portfolio/layout/Layout'
import '../index.css'
import Landing from './portfolio/landing/Landing'
import Commands from './commands/Commands'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Landing />} />
          <Route path='commands' element={<Commands />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
