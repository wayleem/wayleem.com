import { motion } from 'framer-motion'
import { useState } from 'react'
import { saveAs } from 'file-saver'
import popMP3 from '../assets/audio/pop.mp3'
import switchOnMP3 from '../assets/audio/switch-on.mp3'
import ufoMP3 from '../assets/audio/ufo.mp3'
import githubSVG from '../assets/icons/github.svg'
import linkedinSVG from '../assets/icons/linkedin.svg'
import twitterSVG from '../assets/icons/twitter.svg'
import discordSVG from '../assets/icons/discord.svg'
import resumePDF from '../assets/WILLIAM RESUME.pdf'
import airplane from '../assets/icons/airplane.svg'
import ufo from '../assets/icons/ufo.svg'

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
    position: 'md:row-start-1 md:col-start-1',
  },
  {
    handleKey: 'linkedin',
    name: 'linkedin',
    caption: 'william huang',
    icon: linkedinSVG,
    url: 'https://linkedin.com/in/will-huang2/',
    position: 'md:row-start-1 md:col-start-2',
  },
  {
    handleKey: 'twitter',
    name: 'twitter',
    caption: 'wayleemh',
    icon: twitterSVG,
    url: 'https://twitter.com/wayleemh',
    position: 'md:row-start-2 md:col-start-1',
  },
  {
    handleKey: 'discord',
    name: 'discord',
    caption: 'my community',
    icon: discordSVG,
    url: 'https://discord.gg/pThXSZtyVV',
    position: 'md:row-start-2 md:col-start-2',
  },
]

function Contact() {
  const [vehicles, setVehicles] = useState<
    { key: number; type: 'plane' | 'ufo' }[]
  >([])
  const [buttonDisabled, setButtonDisabled] = useState(false)

  // easter egg animation
  function _playFly() {
    const randomKey = Math.random()
    const type = Math.random() < 0.05 ? 'ufo' : 'plane' // 5% chance for UFO

    if (type === 'ufo') {
      const ufoSound = new Audio(ufoMP3)
      ufoSound.play()
      setButtonDisabled(true) // Disable button if UFO
    }
    setVehicles([...vehicles, { key: randomKey, type }])
  }

  // destroy components on animation end
  function _handleAnimationComplete(vehicleKey: number) {
    setVehicles((prevVehicles) =>
      prevVehicles.filter((vehicle) => vehicle.key !== vehicleKey)
    )
    if (
      vehicles.some(
        (vehicle) => vehicle.key === vehicleKey && vehicle.type === 'ufo'
      )
    ) {
      setButtonDisabled(false) // Enable button after UFO animation completes
    }
  }
  // easter egg handling ^
  // -----------------------------------------------------------------------------
  // social links
  function HandleItem(props: Handle) {
    return (
      <div className={`body ${props.position}`}>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex flex-row space-x-2 w-fit transform transition-all md:hover:scale-125"
        >
          <img src={props.icon} className="w-8 select-none" />
          <h2 className="cursor-pointer md:active:font-semibold md:font-normal">
            {props.name}
          </h2>
        </a>
        <h3 className="hidden md:block ml-14 text-sm">{props.caption}</h3>
      </div>
    )
  }
  return (
    <div>
      {/* top menu */}
      <motion.div
        className="flex flex-col"
        initial={{ translateY: -200 }}
        animate={{
          translateY: [-200, 20, 0],
          transition: { duration: 0.5, times: [0, 0.8, 1], ease: 'easeInOut' },
        }}
        exit={{ translateY: -200, transition: { duration: 0.2 } }}
      >
        <h1
          className="h2 mt-16 w-fit pointer-events-auto self-center md:hover:text-base-100 transform transition-all md:hover:scale-105 md:active:animate-pop-in-out"
          onClick={() => {
            if (window.innerWidth > 768) {
              if (buttonDisabled) {
                const switchOn = new Audio(switchOnMP3)
                switchOn.play()
                return
              }
              const pop = new Audio(popMP3)
              pop.play()
              _playFly()
            }
          }}
        >
          CONTACT ME
        </h1>

        {/* create email and resume download */}
        <span className="flex flex-row md:mt-2 mt-32 justify-center font-body md:text-base text-xl space-x-6 decoration-2 underline-offset-2">
          <span className="flex flex-row space-x-2">
            <a
              href="mailto:wayleemh@gmail.com?subject=Contact%20Request"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer pointer-events-auto md:hover:underline active:font-semibold"
            >
              email
            </a>
            <i className="mt-1 fa fa-solid fa-paper-plane" />
          </span>
          <span className="flex flex-row space-x-2">
            <a
              className="cursor-pointer pointer-events-auto md:hover:underline active:font-semibold"
              onClick={() => saveAs(resumePDF, 'williamresume')}
            >
              resume
            </a>
            <i className="mt-1 fa fa-solid fa-file-arrow-down" />
          </span>
        </span>
      </motion.div>

      {/* social handles */}
      <motion.div
        className="grid grid-cols-1 gap-y-8 md:grid-rows-2 md:grid-cols-2 md:absolute justify-items-center items-center p-32 inset-0 w-full h-full"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.05, 1], transition: { duration: 0.5 } }}
        exit={{
          scale: 0,
          transition: { duration: 0.2, times: [0, 0.8, 1], ease: 'easeInOut' },
        }}
      >
        {handles.map((handle) => (
          <HandleItem key={handle.handleKey} {...handle} />
        ))}
      </motion.div>

      {/* plane animation easter egg */}
      {vehicles.map((vehicle) => (
        <motion.img
          key={vehicle.key}
          src={vehicle.type === 'ufo' ? ufo : airplane}
          className="absolute w-[10%] right-[100%] z-10"
          initial={{ x: 0, y: `${Math.random() * 100}%` }}
          animate={{
            x: '1500%',
            transition:
              vehicle.type === 'ufo'
                ? { duration: 3, ease: 'linear' }
                : { duration: 1, ease: 'easeIn' },
          }}
          onAnimationComplete={() => _handleAnimationComplete(vehicle.key)}
        />
      ))}
    </div>
  )
}

export default Contact
