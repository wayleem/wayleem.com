import { motion } from 'framer-motion'
import popMP3 from '../assets/audio/pop.mp3'
import virtual_tour_1 from '../assets/video/virtual-tour-1.gif'
import virtual_tour_2 from '../assets/video/virtual-tour-2.gif'
import virtual_tour_3 from '../assets/video/virtual-tour-3.gif'
import clinchoice1 from '../assets/video/clinchoice1.gif'
import clinchoice2 from '../assets/video/clinchoice2.gif'
import clinchoice3 from '../assets/video/clinchoice3.gif'
import spot1 from '../assets/video/spot1.gif'
import spot2 from '../assets/video/spot2.gif'
import spot3 from '../assets/video/spot3.gif'
import ghost_hunter_1 from '../assets/video/ghost-hunter-1.gif'
import ghost_hunter_2 from '../assets/video/ghost-hunter-2.gif'
import ghost_hunter_3 from '../assets/video/ghost-hunter-3.gif'
import githubSVG from '../assets/icons/github.svg'
import { useState } from 'react'

type CategoryKeys = 'projects' | 'jobs'
interface XP {
  xpKey: string
  name: string
  type: string
  position: string
  date: string
  url?: string
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
      url: 'https://github.com/wayleem/virtual-tour',
      component: VirtualTourContent,
    },

    {
      xpKey: 'spot',
      name: 'Spot',
      type: 'project',
      date: 'nov2022',
      position: 'left-[20%] top-[50%]',
      url: 'https://github.com/wayleem/spot',
      component: SpotContent,
    },

    {
      xpKey: 'ghost_hunter',
      name: 'Ghost Hunter',
      type: 'project',
      date: 'dec2022',
      position: 'right-[25%] top-[30%]',
      url: 'https://github.com/wayleem/ghost-hunter',
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
      url: 'https://github.com/wayleem/demo-data-server',
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
              <a href="#lifespan" className="hover:text-base-100">
                Lifespan
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
            <h1 id="lifespan" className="h2">
              Lifespan
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
              any design choices and hear their feedback. We actively deploy the
              application through its life lifespan to allow the client to test
              the virtual tour for themselves. Once completed, we continued to
              communicate with the client with any improvements or features they
              would like before we ultimately present the project at the end of
              the semester.
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
              <a href="#lifespan">Lifespan</a>
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
            <p className="body">
              Solo rapid development of a hide and seek game prototype called
              Spot on Roblox for a Stony Brook related course project. Built
              around the simple game of hide and seek, the course challenged us
              to use virtualization to our advantage to shift how the game can
              be played out on an online platform. The name Spot is derived from
              the character of a spotlight the seeker takes on. Achieved core
              game functionalities to be demoed in 1 month.
            </p>

            <h1 id="lifespan" className="h2">
              Lifespan
            </h1>
            <p className="body">
              I used Roblox Studio for my game development project because it
              provided a platform for multiplayer, existing physics and movement
              controls. Therefore, given a span of a month, I can flesh out the
              game functionalities more and be able to involve the entire class
              in a playtest at the end. The game's foundation is hide and seek
              so I aimed to work on the core fundamentals of hide and seek
              first.
              <br />
              <br />
              Working on the core fundamentals of hide and seek boils down to
              two classes: hiders and a seeker. Win conditions for the hider is
              when they successfully evade capture within a time limit whereas
              seekers win when they eliminated all the hiders. Given the premise
              of hide and seek, I am given inspiration for the theme of my game.
              I characterized the seeker as a big spotlight that eliminates
              hiders in its beam.
              <br />
              <br />
              These core ideas can easily create a story that I can now build my
              game consistently around, hence the name Spot. For instance, I can
              take advantage of the characteristics of the seeker being a
              spotlight and spin it into a mechanic where hiders are not visible
              unless they are within the beam of light.
              <br />
              <br />
              After rapidly laying out the grounds of the game, I independently
              fleshed out a prototype for presentation at the project deadline
              where I receive feedback from my professor and peers after they
              playtested my game.
            </p>
            <h1 id="technical" className="h2">
              Technical
            </h1>
            <p className="body">
              This game is built in Roblox Studio where I used a plugin to use
              my own editor and transpile TypeScript to Lua since Roblox uses
              Lua.
              <br />
              <br />I broke down Spot's premise to server and client functions.
              For instance, the seeker's client has all hiders rendered
              invisible unless they come within the range of the light. The
              server keeps track of the seeker's position to maintain
              consistency for all players to determine if the hiders get
              damaged. Therefore, there may be some desync in player
              perspectives depending on latency but it should be accurate for
              everyone.
              <br />
              <br />
              In conclusion, this was just a simple hide and seek prototype but
              the emphasis was on the rapid prototyping and development.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <img src={spot2} />
          <img src={spot3} />
          <img src={spot1} />
        </div>
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
              <a href="#lifespan">Lifespan</a>
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
            <p className="body">
              Solo rapid development of a mobile camera app prototype called
              Ghost Hunter for a Stony Brook related course project. Built
              around camera usage, the course challenged us to create a mobile
              app out of a phone function within a month. Ghost Hunter is an app
              that allows you to hunt and capture ghosts in your camera.
              Achieved core game functionalities to be demoed in 1 month.
            </p>

            <h1 id="lifespan" className="h2">
              Lifespan
            </h1>
            <p className="body"></p>
            <h1 id="technical" className="h2">
              Technical
            </h1>
            <p className="body"></p>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <img src={ghost_hunter_1} />
          <img src={ghost_hunter_2} />
        </div>
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
              <a href="#lifespan">Lifespan</a>
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
            <p className="body">
              Worked with a mentor to develop best practice future ClinChoice
              web applications. To identify best practices, I conducted research
              on various modern web development frameworks related to data
              analysis and UI that fits ClinChoice's discipline such as data
              visualization. I made assessments on each framework and library if
              they satisfy the standards of ClinChoice. Under guidance from the
              IT vice president, a demo data server is created to replicate the
              usage of such frameworks to ClinChoice standards within 1 month.
            </p>
            <h1 id="lifespan" className="h2">
              Lifespan
            </h1>
            <p className="body">
              ClinChoice's web applications is built with JavaScript and
              BootStrap. To create scalable prospects for ClinChoice's future
              web applications, I suggested the usage of TypeScript and outlined
              the benefits and technical assessments of the language to my
              mentor. I wanted to change the current infrastructure to one that
              was more modern.
              <br />
              <br />
              In weekly scrum meetings, I presented the pros and cons of various
              web development frameworks to my team to decide upon frameworks to
              use for user interfaces. I delivered a cohesive and concise
              presentation on the frameworks ClinChoice should use. After
              approval, I spent the rest of the internship developing a demo
              prototype to showcase the usage of the frameworks.
              <br />
              <br />I worked by myself with occasional weekly monitoring by my
              mentor to create a mock data server using ClinChoice's current
              data server interface as a starting point. Nearing the end of my
              internship, I presented the usage of TypeScript and the frameworks
              in the developmental stage and demoed my data server that I had
              created to a board of ClinChoice senior executives.
            </p>
            <h1 id="technical" className="h2">
              Technical
            </h1>
            <p className="body">
              The demo data server is built with React, Redux, MaterialUI,
              ApexCharts, and written in TypeScript.
              <br />
              <br />I used TailwindCSS and DaisyUI to organize my styles to ease
              the developmental process. The demo data server was self
              documenting with the usage of TypeScript which emphasizes the
              benefits of TypeScript. Other than that, the technicalities of
              each frameworks role was explained in the final presentation.
              Since ClinChoice spans internationally, it is important to be
              accessible and that was the objective of the UI design. MaterialUI
              is a enterprise level component library that is rich with
              features, allowing data analysts across ClinChoice to easily
              interpret information on future ClinChoice web applications.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <img src={clinchoice1} />
          <img src={clinchoice2} />
          <img src={clinchoice3} />
        </div>
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
            <div className="flex flex-row justify-between mb-8">
              <div className="flex flex-row space-x-4">
                <h1 className="h2">{content?.name}</h1>
                <h2 className="body mt-2">{content?.date}</h2>
                <a
                  href={content?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-6 mt-2" src={githubSVG} />
                </a>
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
