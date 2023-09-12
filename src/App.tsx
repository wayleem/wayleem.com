import { Routes, Route, HashRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import About from './pages/About'
import Experience from './pages/Experience'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
