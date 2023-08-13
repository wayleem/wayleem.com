import { Outlet } from 'react-router-dom'
import CubeScene from './Canvas'

function Layout() {
  return (
    <>
      <CubeScene />
      <Outlet />
    </>
  )
}

export default Layout
