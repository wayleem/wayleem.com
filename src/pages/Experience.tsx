import { motion } from 'framer-motion'
import popMP3 from '../assets/audio/pop.mp3'
import virtual_tour_1 from '../assets/video/virtualtourPre.gif'
import virtual_tour_2 from '../assets/video/virtualtourEnter.gif'
import { useState } from 'react'

interface XP {
  xpKey: string
  name: string
  type: string
  position: string
  component: () => JSX.Element
}

const experiences: XP[] = [
  {
    xpKey: 'virtual_tour',
    name: 'Virtual Tour',
    type: 'project',
    position: 'left-[25%] top-[30%]',
    component: VirtualTourContent,
  },
  {
    xpKey: 'spot',
    name: 'Spot',
    type: 'project',
    position: 'left-[20%] top-[50%]',
    component: SpotContent,
  },
  {
    xpKey: 'ghost_hunter',
    name: 'Ghost Hunter',
    type: 'project',
    position: 'right-[25%] top-[30%]',
    component: GhostHunterContent,
  },
  {
    xpKey: 'clinchoice',
    name: 'ClinChoice',
    type: 'intern',
    position: 'right-[20%] top-[50%]',
    component: ClinChoiceContent,
  },
]

function VirtualTourContent() {
  return (
    <div>
      <h1 className="font-header text-4xl">Virtual Tour</h1>
      <img src={virtual_tour_1} />
      <img src={virtual_tour_2} className="w-[50%]" />
    </div>
  )
}
function SpotContent() {
  return (
    <div>
      <h1 className="font-header text-4xl">Spot</h1>
    </div>
  )
}
function GhostHunterContent() {
  return (
    <div>
      <h1 className="font-header text-4xl">Ghost Hunter</h1>
    </div>
  )
}
function ClinChoiceContent() {
  return (
    <div>
      <h1 className="font-header text-4xl">ClinChoice</h1>
    </div>
  )
}

enum Display {
  on = 'On',
  off = 'Off',
  inactive = 'Inactive',
}

function Experience() {
  const [visible, setVisible] = useState<Display>(Display.inactive)
  const [content, setContent] = useState<JSX.Element>()

  function XPItem(props: XP) {
    return (
      <div className={`float-text-sm ${props.position}`}>
        <div
          className="w-fit transform transition-all hover:scale-125 active:animate-pop-in-out"
          onClick={() => {
            setVisible(Display.on)
            setContent(props.component)
          }}
        >
          <h2 className="cursor-pointer">{props.name}</h2>
        </div>
        <h3 className="ml-2 text-sm">{props.type}</h3>
      </div>
    )
  }

  return (
    <div>
      {/* top menu */}
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
          className="h1 mt-16 w-fit self-center hover:text-base-100 transform transition-all hover:scale-105 active:animate-pop-in-out"
          onClick={() => {
            const pop = new Audio(popMP3)
            pop.play()
          }}
        >
          Experience
        </h1>
      </motion.div>

      {/* projects and work items */}
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

      <div>
        <motion.div
          className={`fixed bg-inactive inset-0 opacity-0 pointer-events-none ${
            visible === Display.on
              ? 'animate-shade-in pointer-events-auto'
              : visible === Display.off
              ? 'animate-shade-out'
              : ''
          }`}
          onClick={() => setVisible(Display.off)}
        >
          <div>{content}</div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
