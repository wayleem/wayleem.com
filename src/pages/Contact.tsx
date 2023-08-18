import { motion } from 'framer-motion'
import { saveAs } from 'file-saver'
import popMP3 from '../assets/audio/pop.mp3'
import githubSVG from '../assets/icons/github.svg'
import linkedinSVG from '../assets/icons/linkedin.svg'
import twitterSVG from '../assets/icons/twitter.svg'
import discordSVG from '../assets/icons/discord.svg'
import resumePDF from '../assets/resume.pdf'

interface Handle {
  handleKey: string
  name: string
  caption: string
  icon: string
  url: string
  position: string
}

const handles: Handle[] = [
  {
    handleKey: 'github',
    name: 'github',
    caption: 'wayleem',
    icon: githubSVG,
    url: 'https://github.com/wayleem',
    position: 'left-[25%] top-[30%]',
  },
  {
    handleKey: 'linkedin',
    name: 'linkedin',
    caption: 'william huang',
    icon: linkedinSVG,
    url: 'https://linkedin.com/in/will-huang2/',
    position: 'left-[20%] top-[50%]',
  },
  {
    handleKey: 'twitter',
    name: 'twitter',
    caption: 'wayleemh',
    icon: twitterSVG,
    url: 'https://twitter.com/wayleemh',
    position: 'right-[20%] top-[30%]',
  },
  {
    handleKey: 'discord',
    name: 'discord',
    caption: 'my community',
    icon: discordSVG,
    url: 'https://discord.gg/pThXSZtyVV',
    position: 'right-[15%] top-[50%]',
  },
]
function Contact() {
  function HandleItem(props: Handle) {
    return (
      <div className={`float-text-sm ${props.position}`}>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row space-x-2 w-fit transform transition-all hover:scale-125"
        >
          <img src={props.icon} className="w-8 select-none" />
          <h2 className="cursor-pointer active:font-semibold">{props.name}</h2>
        </a>
        <h3 className="ml-14 text-sm">{props.caption}</h3>
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
          Contact me
        </h1>
        <span className="flex flex-row mt-2 justify-center font-body space-x-6 decoration-2 underline-offset-2">
          <span className="flex flex-row space-x-2">
            <a
              href="mailto:wayleemh@gmail.com?subject=Contact%20Request"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline active:font-semibold"
            >
              email
            </a>
            <i className="mt-1 fa fa-solid fa-paper-plane" />
          </span>
          <span className="flex flex-row space-x-2">
            <a
              className="cursor-pointer hover:underline active:font-semibold"
              onClick={() => saveAs(resumePDF, 'williamresume')}
            >
              resume
            </a>
            <i className="mt-1 fa fa-solid fa-file-arrow-down" />
          </span>
        </span>
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
          {handles.map((handle) => (
            <HandleItem key={handle.handleKey} {...handle} />
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default Contact
