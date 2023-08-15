import { Outlet } from 'react-router-dom'
import CubeScene from './CubeScene'

function Layout() {
  return (
    <>
      <CubeScene />
      <div className="absolute left-0 top-0 z-10 text-white">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
