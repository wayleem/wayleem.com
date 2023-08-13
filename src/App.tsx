import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Layout />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
