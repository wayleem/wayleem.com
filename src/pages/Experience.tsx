import { motion } from 'framer-motion'
import popMP3 from '../assets/audio/pop.mp3'
import virtual_tour_1 from '../assets/video/virtual-tour-1.gif'
import virtual_tour_2 from '../assets/video/virtual-tour-2.gif'
import virtual_tour_3 from '../assets/video/virtual-tour-3.gif'
import { useState } from 'react'

type CategoryKeys = 'projects' | 'jobs'
interface XP {
  xpKey: string
  name: string
  type: string
  position: string
  date: string
  component: () => JSX.Element
}

const xpCategories: Record<CategoryKeys, XP[]> = {
  projects: [
    {
      xpKey: 'virtual_tour',
      name: 'Virtual Tour',
      type: 'project',
      date: 'mar2023-may2023',
      position: 'left-[25%] top-[30%]',
      component: VirtualTourContent,
    },

    {
      xpKey: 'spot',
      name: 'Spot',
      type: 'project',
      date: 'nov2022',
      position: 'left-[20%] top-[50%]',
      component: SpotContent,
    },

    {
      xpKey: 'ghost_hunter',
      name: 'Ghost Hunter',
      type: 'project',
      date: 'dec2022',
      position: 'right-[25%] top-[30%]',
      component: GhostHunterContent,
    },
  ],
  jobs: [
    {
      xpKey: 'clinchoice',
      name: 'ClinChoice',
      type: 'intern',
      date: 'jul2023-aug2023',
      position: 'right-[20%] top-[50%]',
      component: ClinChoiceContent,
    },
  ],
}

function VirtualTourContent() {
  return (
    <div className="select-text">
      {/* Table of Contents */}
      <div className="flex flex-row space-x-8">
        <div className="mr-8">
          <ul className="body space-y-2">
            <li>
              <a href="#overview" className="hover:text-base-100">
                Overview
              </a>
            </li>
            <li>
              <a href="#cycle" className="hover:text-base-100">
                Cycle
              </a>
            </li>
            <li>
              <a href="#technical" className="hover:text-base-100">
                Technical
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-[50%]">
          <div className="flex-col space-y-8">
            <h1 id="overview" className="h2">
              Overview
            </h1>
            <p className="body">
              Led the developmental process of a virtual tour for a Stony Brook
              related course project. My team worked with the organization Group
              for the East End to develop a virtual tour of hiking trails. The
              team is a small group of students in charge of various tasks from
              communicating with the client to developing the application
              itself. I led the developmental part of the project, dictating the
              structure, frameworks, and schedule to complete and deliver the
              final virtual tour product within the span of 3 months.
            </p>
            <h1 id="cycle" className="h2">
              Cycle
            </h1>
            <p className="body">
              Responsibilities are delegated to each member of the team as the
              team is split into separate departments. For instance, I lead the
              programming department whereas theres a division whose
              responsibility is to communicate with the client and keep the rest
              of the team up to date of client concerns.
              <br />
              <br />
              Since the start of the semester, we meet with the client regularly
              to discuss their expectations and goals in the time period of our
              semester. The Group for the East End wanted a virtual tour of
              their trails to make them more accessible. During this period, I
              research what frameworks to use for their goals and consulted each
              of the developers on their thoughts on our best practice and
              vision. It was a straight forward process for me to identify an
              agreed upon framework and learn it for rendering panoramas from
              here on.
              <br />
              <br />
              After I had conceptualized the development, the communications
              team arranged a date where I can travel with the client to the
              hiking trails on site to obtain assets. Leading up to that date, I
              drafted a layout and pages that would be on the application. My
              teammates and I worked on the user interfaces of the application
              until we have the assets to create the virtual tour itself. We
              spent a day capturing panoramas of the trails with a 360 camera.
              With all the assets that we need, we can start implementing the
              virtual tour.
              <br />
              <br />
              We showed the client each step of the developmental process and
              improvements up to its completion, to allow them to interject at
              any design choices. We actively deploy the application through its
              life cycle to allow the client to test the virtual tour for
              themselves. Once completed, we continued to communicate with the
              client with any improvements or features they would like before we
              ultimately present the project at the end of the semester.
            </p>
            <h1 id="technical" className="h2">
              Technical
            </h1>
            <p className="body">
              The virtual tour is built with React, Redux, Panolens, TailwindCSS
              and written in TypeScript.
              <br />
              <br />
              Since this was a collaborative project, I advised the team to
              decisively use TypeScript for the application. The static-typing
              features of TypeScript allows our team to work coherently and
              understand each other's code. TailwindCSS also follows this idea,
              we can maintain a consistent style that our team can reuse.
              Panolens is a panorama renderer that has typings for TypeScript
              support.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <img src={virtual_tour_1} />
          <img src={virtual_tour_2} />
          <img src={virtual_tour_3} />
        </div>
      </div>
    </div>
  )
}
function SpotContent() {
  return (
    <div>
      {/* Table of Contents */}
      <div className="flex flex-row space-x-8">
        <div className="mr-8">
          <ul className="body space-y-2">
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#cycle">Cycle</a>
            </li>
            <li>
              <a href="#technical">Technical</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-[50%]">
          <div className="flex-col space-y-8">
            <h1 id="overview" className="h2">
              Overview
            </h1>
            <p className="body"></p>

            <h1 id="cycle" className="h2">
              Cycle
            </h1>
            <p className="body"></p>
            <h1 id="technical" className="h2">
              Technical
            </h1>
            <p className="body"></p>
          </div>
        </div>
        <div className="flex flex-col space-y-8"></div>
      </div>
    </div>
  )
}
function GhostHunterContent() {
  return (
    <div>
      {/* Table of Contents */}
      <div className="flex flex-row space-x-8">
        <div className="mr-8">
          <ul className="body space-y-2">
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#cycle">Cycle</a>
            </li>
            <li>
              <a href="#technical">Technical</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-[50%]">
          <div className="flex-col space-y-8">
            <h1 id="overview" className="h2">
              Overview
            </h1>
            <p className="body"></p>

            <h1 id="cycle" className="h2">
              Cycle
            </h1>
            <p className="body"></p>
            <h1 id="technical" className="h2">
              Technical
            </h1>
            <p className="body"></p>
          </div>
        </div>
        <div className="flex flex-col space-y-8"></div>
      </div>
    </div>
  )
}
function ClinChoiceContent() {
  return (
    <div>
      {/* Table of Contents */}
      <div className="flex flex-row space-x-8">
        <div className="mr-8">
          <ul className="body space-y-2">
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#cycle">Cycle</a>
            </li>
            <li>
              <a href="#technical">Technical</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-[50%]">
          <div className="flex-col space-y-8">
            <h1 id="overview" className="h2">
              Overview
            </h1>
            <p className="body"></p>

            <h1 id="cycle" className="h2">
              Cycle
            </h1>
            <p className="body"></p>
            <h1 id="technical" className="h2">
              Technical
            </h1>
            <p className="body"></p>
          </div>
        </div>
        <div className="flex flex-col space-y-8"></div>
      </div>
    </div>
  )
}

enum Display {
  on = 'On',
  off = 'Off',
  inactive = 'Inactive',
}

function Experience() {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryKeys | 'all'
  >('all')
  const [visible, setVisible] = useState<Display>(Display.inactive)
  const [content, setContent] = useState<XP>()

  function XPItem(props: XP) {
    return (
      <div className={`float-text-sm ${props.position}`}>
        <h3 className="text-sm">{props.type}</h3>
        <div
          className="w-fit transform transition-all hover:scale-125 active:animate-pop-in-out"
          onClick={() => {
            setVisible(Display.on)
            setContent(props)
          }}
        >
          <h2 className="ml-4 cursor-pointer">{props.name}</h2>
        </div>
        <h3 className="ml-12 text-sm">{props.date}</h3>
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

      <div className="z-30">
        <motion.div
          className={`fixed bg-inactive inset-0 opacity-0 pointer-events-none overflow-y-scroll ${
            visible === Display.on
              ? 'animate-shade-in pointer-events-auto'
              : visible === Display.off
              ? 'animate-shade-out'
              : ''
          }`}
        >
          <div className="w-[60%] flex flex-col justify-between mx-auto mt-12 mb-12">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row space-x-4">
                <h1 className="h2 mb-8">{content?.name}</h1>
                <h2 className="body mt-2">{content?.date}</h2>
              </div>
              <div
                className="flex flex-row items-center space-x-2 text-readable cursor-pointer hover:text-error"
                onClick={() => setVisible(Display.off)}
              >
                <h1 className="font-header text-4xl tracking-wider">close</h1>
                <span className="fa fa-regular fa-circle-xmark text-3xl" />
              </div>
            </div>
            {content && <content.component />}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
