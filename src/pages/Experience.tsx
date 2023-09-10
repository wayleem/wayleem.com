import { motion } from 'framer-motion'
import popMP3 from '../assets/audio/pop.mp3'
import virtual_tour_1 from '../assets/video/virtual-tour-1.gif'
import clinchoice1 from '../assets/video/clinchoice1.gif'
import spot1 from '../assets/video/spot1.gif'
import ghost_hunter_1 from '../assets/video/ghost-hunter-1.gif'
import githubSVG from '../assets/icons/github.svg'
import { useState } from 'react'

type CategoryKeys = 'projects' | 'jobs'

interface XP {
  xpKey: string
  name: string
  type: string
  position: string
  date: string
  url: string
  img: string
  tools: string[]
  platform: 'desktop' | 'mobile'
}

const toolKeys: Record<string, string> = {
  TS: 'bg-blue-500',
  React: 'bg-blue-500',
  'React Native': 'bg-blue-500',
  'Redux.js': 'bg-purple-700',
  'Node.js': 'bg-green-500',
  Roact: 'bg-gray-400',
  Rodux: 'bg-gray-400',
  'panolens.js': 'bg-gray-400',
  Expo: 'bg-gray-400',
  'ApexCharts.js': 'bg-gray-400',
}

const xpCategories: Record<CategoryKeys, XP[]> = {
  projects: [
    {
      xpKey: 'virtual_tour',
      name: 'Virtual Tour',
      type: 'project',
      date: 'mar2023-may2023',
      position: 'left-[20%] top-[15%]',
      url: 'https://github.com/wayleem/virtual-tour',
      img: virtual_tour_1,
      tools: ['TS', 'React', 'Redux.js', 'Node.js', 'panolens.js'],
      platform: 'desktop',
    },

    {
      xpKey: 'spot',
      name: 'Spot',
      type: 'project',
      date: 'nov2022',
      position: 'left-[15%] top-[50%]',
      url: 'https://github.com/wayleem/spot',
      img: spot1,
      tools: ['TS', 'Roact', 'Rodux'],
      platform: 'desktop',
    },

    {
      xpKey: 'ghost_hunter',
      name: 'Ghost Hunter',
      type: 'project',
      date: 'dec2022',
      position: 'right-[15%] top-[15%]',
      url: 'https://github.com/wayleem/ghost-hunter',
      img: ghost_hunter_1,
      tools: ['TS', 'React Native', 'Redux.js', 'Node.js', 'Expo'],
      platform: 'mobile',
    },
  ],
  jobs: [
    {
      xpKey: 'clinchoice',
      name: 'ClinChoice',
      type: 'intern',
      date: 'jul2023-aug2023',
      position: 'right-[20%] top-[50%]',
      url: 'https://github.com/wayleem/demo-data-server',
      img: clinchoice1,
      tools: ['TS', 'React', 'Redux.js', 'Node.js', 'ApexCharts.js'],
      platform: 'desktop',
    },
  ],
}

function Experience() {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryKeys | 'all'
  >('all')

  function XPItem(props: XP) {
    const isMobile = props.platform === 'mobile'

    return (
      <div
        className={`absolute bg-inactive p-4 m-4 rounded-lg shadow-lg w-[400px] h-[400px] pointer-events-auto ${
          props.position
        } ${isMobile ? 'flex flex-row items-center' : 'flex flex-col'} `}
      >
        {/* Displaying the image */}
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${isMobile ? 'mr-4' : ''}`}
        >
          <img
            src={props.img}
            className={`object-cover rounded-lg mb-4 cursor-pointer ${
              isMobile ? '' : 'w-full h-[200px]'
            }`}
          />
        </a>

        <div className="flex flex-col">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <h3 className="subtitle-text font-semibold mb-2 cursor-pointer">
              {props.name}
            </h3>
          </a>
          <div className="flex flex-wrap">
            {props.tools.map((tool, index) => (
              <span
                key={index}
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white m-1 ${toolKeys[tool]}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const toggleCategory = (category: CategoryKeys | 'all') => {
    if (category === selectedCategory) {
      setSelectedCategory('all')
    } else {
      setSelectedCategory(category)
    }
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
            toggleCategory('all')
          }}
        >
          Experience
        </h1>
        <span className="flex flex-row mt-2 justify-center font-body space-x-2 decoration-2 underline-offset-2">
          {Object.keys(xpCategories).map((category) => (
            <h2
              key={category}
              className={`cursor-pointer hover:underline ${
                category === selectedCategory
                  ? 'font-semibold text-base-100'
                  : 'hover:text-base-100 text-base-content'
              }`}
              onClick={() => toggleCategory(category as CategoryKeys)}
            >
              {category}
            </h2>
          ))}
        </span>
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
        {Object.entries(xpCategories).map(([category, experiences]) => (
          <ul
            key={category}
            className={`absolute w-full h-full ${
              selectedCategory === category || selectedCategory === 'all'
                ? 'animate-shoot-out'
                : 'animate-shoot-in'
            }`}
          >
            {experiences.map((xp) => (
              <XPItem key={xp.xpKey} {...xp} />
            ))}
          </ul>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience
