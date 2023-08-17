import { Outlet, useLocation, NavLink } from 'react-router-dom'
import CubeScene from './CubeScene'

function Layout() {
  const location = useLocation()

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <CubeScene />
      </div>
      <div className="absolute left-0 top-0 w-full h-full z-20 pointer-events-none">
        <Outlet />
      </div>
      <div className="flex flex-row absolute right-0 top-0 z-20 mt-4 mr-4">
        <NavLink
          className="font-subtitle text-xl text-base-content font-semibold hover:text-base-100 hover:underline underline-offset-2"
          to="/"
        >
          home
        </NavLink>
        <h1 className="subtitle-text">{location.pathname}</h1>
      </div>
    </>
  )
}

export default Layout
