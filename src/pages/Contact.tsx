import { motion } from 'framer-motion'
import popMP3 from '../assets/pop.mp3'

function Contact() {
  return (
    <div>
      <motion.div
        className="flex flex-col pointer-events-auto"
        initial={{ translateY: -200 }}
        animate={{
          translateY: [-200, 20, 0],
          transition: { duration: 0.5, times: [0, 0.8, 1], ease: 'easeInOut' },
        }}
        exit={{ translateY: -200, transition: { duration: 0.2 } }}
      >
        <h1
          className="h1 mt-12 w-fit self-center cursor-pointer hover:text-base-100 transform transition-all hover:scale-125 active:animate-pop-in-out"
          onClick={() => {
            const pop = new Audio(popMP3)
            pop.play()
          }}
        >
          Contact me
        </h1>
      </motion.div>
    </div>
  )
}

export default Contact
