import { useLocation, NavLink, useOutlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import CubeScene from './CubeScene'

function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  const isHomePage = location.pathname === '/'

  return (
    <>
      {/* threejs canvas */}
      <div
        className={`absolute inset-0 w-full ${
          isHomePage ? 'block' : 'hidden md:block'
        }`}
      >
        <CubeScene />
      </div>
      {/* page content */}
      <div
        className={`absolute inset-0 w-full h-full z-10 overflow-hidden select-none pointer-events-none 
  ${
    isHomePage
      ? 'bg-transparent'
      : 'bg-neutral md:bg-transparent pointer-events-auto md:pointer-events-none overflow-y-scroll md:overflow-hidden'
  }`}
      >
        <AnimatePresence mode="wait">
          <motion.main key={location.pathname}>{outlet}</motion.main>
        </AnimatePresence>
      </div>
      {/* breadcrumb */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="flex flex-row absolute right-0 top-0 z-20 mt-4 mr-4 select-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
          exit={{ opacity: 0 }}
        >
          {/* desktop home */}
          <NavLink
            className="hidden md:block font-subtitle md:text-xl text-base-content font-semibold hover:text-base-100 hover:underline underline-offset-2"
            to="/"
          >
            home
          </NavLink>
          {/* mobile home */}
          <NavLink
            className={`md:hidden fa fa-solid fa-home text-2xl hover:text-base-100 active:text-base-100 mr-2 ${
              isHomePage ? 'hidden' : 'block'
            }`}
            to="/"
          />

          <span className="md:block hidden font-subtitle md:text-xl text-base-content">
            &nbsp;{location.pathname}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* footer */}
    </>
  )
}

export default Layout
