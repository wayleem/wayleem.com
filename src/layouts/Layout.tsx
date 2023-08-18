import { useLocation, NavLink, useOutlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import CubeScene from './CubeScene'

function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <>
      {/* threejs canvas */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <CubeScene />
      </div>
      {/* page content */}
      <div className="absolute left-0 top-0 w-full h-full z-20 overflow-hidden select-none pointer-events-none">
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
          <NavLink
            className="font-subtitle text-xl text-base-content font-semibold hover:text-base-100 hover:underline underline-offset-2"
            to="/"
          >
            home
          </NavLink>
          <span className="subtitle-text">{location.pathname}</span>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Layout
