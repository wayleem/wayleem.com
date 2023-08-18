import { motion } from 'framer-motion'
import popMP3 from '../assets/audio/pop.mp3'

interface XP {
  xpKey: string
  name: string
  type: string
  position: string
}

const experiences: XP[] = [
  {
    xpKey: 'virtual_tour',
    name: 'Virtual Tour',
    type: 'project',
    position: 'right-[20%] top-[30%]',
  },
  {
    xpKey: 'spot',
    name: 'Spot',
    type: 'project',
    position: 'right-[15%] top-[70%]',
  },
  {
    xpKey: 'ghost_hunter',
    name: 'Ghost Hunter',
    type: 'project',
    position: 'right-[15%] top-[50%]',
  },
  {
    xpKey: 'clinchoice',
    name: 'ClinChoice',
    type: 'intern',
    position: 'right-[25%] top-[20%]',
  },
]

function Experience() {
  function XPItem(props: XP) {
    return (
      <div className={`float-text-sm ${props.position}`}>
        <div className="w-fit transform transition-all hover:scale-125">
          <svg className="animate-pulse absolute top-4 -left-4 w-2 h-2 rounded-full bg-base-content" />
          <h2 className="cursor-pointer">{props.name}</h2>
        </div>
        <h3 className="ml-2 text-sm">{props.type}</h3>
      </div>
    )
  }

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
          className="h1 mt-12 w-fit self-center hover:text-base-100 transform transition-all hover:scale-105 active:animate-pop-in-out"
          onClick={() => {
            const pop = new Audio(popMP3)
            pop.play()
          }}
        >
          Experience
        </h1>
      </motion.div>

      <motion.div className="ml-14 mt-14 w-[35%]">
        <p className="body">
          Most of my background stems from job experience,{' '}
        </p>
      </motion.div>

      <motion.div
        className="absolute inset-0 w-screen h-screen"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.05, 1], transition: { duration: 0.5 } }}
        exit={{
          scale: 0,
          transition: { duration: 0.2, times: [0, 0.8, 1], ease: 'easeInOut' },
        }}
      >
        <ul className="absolute w-full h-full">
          {experiences.map((xp) => (
            <XPItem key={xp.xpKey} {...xp} />
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default Experience
