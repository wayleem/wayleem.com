import { motion } from 'framer-motion'
import { useState } from 'react'
import sbuBanner from '../assets/icons/sbu.png'
import cityBanner from '../assets/icons/city.png'
import guitarBanner from '../assets/icons/guitar.png'
import popMP3 from '../assets/audio/pop.mp3'

function About() {
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [nameIndex, setNameIndex] = useState(0)

  const greetings = ['Hello,', 'Wassup,', 'Hey!', 'Hi,']
  const names = ["I'm William.", "It's William!", 'William here.']

  const poof = new Audio(popMP3)

  const toggleGreeting = () => {
    if (window.innerWidth > 768) {
      poof.play()
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length)
    }
  }

  const toggleName = () => {
    if (window.innerWidth > 768) {
      poof.play()
      setNameIndex((prevIndex) => (prevIndex + 1) % names.length)
    }
  }
  // easter eggs ^
  //-------------------------------------------------------------------------
  return (
    <div className="p-4 md:-mt-10 flex flex-col">
      {/* greeting card */}
      <div className="flex flex-col md:text-center text-start">
        <motion.div
          className="md:mt-16 w-fit md:self-center self-start pointer-events-auto"
          initial={{ translateY: -200 }}
          animate={{
            translateY: [-200, 20, 0],
            transition: {
              duration: 0.5,
              times: [0, 0.8, 1],
              ease: 'easeInOut',
            },
          }}
          exit={{ translateY: -200, transition: { duration: 0.2 } }}
        >
          <span className="h1 w-fit space-y-4">
            <h1
              className="transform transition-all md:hover:text-base-100 md:hover:scale-105 md:active:animate-pop-in-out"
              onClick={toggleGreeting}
            >
              {greetings[greetingIndex]}
            </h1>
            <h1
              className="transform transition-all md:hover:text-base-100 md:hover:scale-105 md:active:animate-pop-in-out"
              onClick={toggleName}
            >
              {names[nameIndex]}
            </h1>
          </span>
        </motion.div>

        <motion.p
          className="body mt-6 md:w-[30%] w-full md:self-center self-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.4 } }}
          exit={{ opacity: 0 }}
        >
          Welcome to my portfolio. I am a student developer pursuing a career in
          software engineering.
        </motion.p>
      </div>

      {/* about me content */}
      <motion.div
        className="flex flex-col space-y-8 md:mt-0 -mt-16 md:flex-none md:grid grid-rows-3 grid-cols-3 md:absolute inset-0 md:p-32 w-full h-full"
        initial={{ translateX: -2000 }}
        animate={{
          translateX: [-2000, 20, 0],
          transition: {
            duration: 0.5,
            times: [0, 0.8, 1],
            ease: 'easeInOut',
          },
        }}
        exit={{ translateY: -1200, transition: { duration: 0.2 } }}
      >
        {/* life body */}
        <div className="row-start-1 col-start-1 md:mt-32">
          <img
            src={cityBanner}
            className="-z-10 2xl:w-[550px] opacity-50"
            draggable={false}
          />
          <h1 className="absolute font-subtitle text-4xl text-readable -mt-16">
            Life
          </h1>
          <motion.p
            className="body mt-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, delay: 0.4 },
            }}
            exit={{ opacity: 0 }}
          >
            I grew up in NYC from a chinese household. I've always loved making
            and building things, which make sense of why I pursue a career in
            SWE.
          </motion.p>
        </div>
        {/* education body */}
        <div className="flex flex-col row-start-2 col-start-3">
          <img
            src={sbuBanner}
            className="md:-ml-16 2xl:w-[450px] md:mt-0 mt-4 order-3 md:order-none"
            draggable={false}
          />
          <h1 className="font-subtitle text-4xl text-readable md:-mt-2 md:ml-8 order-1 md:order-none">
            Education
          </h1>
          <motion.p
            className="body mt-2 order-2 md:order-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, delay: 0.4 },
            }}
            exit={{ opacity: 0 }}
          >
            I am a student at Stony Brook University. I am pursuing a B.S. in
            Technical Systems Management with a discipline in Computer Science.
          </motion.p>
        </div>
        {/* hobbies body */}
        <div className="row-start-3 col-start-2">
          <h1 className="font-subtitle text-4xl text-readable">Hobbies</h1>
          <motion.p
            className="body mt-4 md:-mb-8 -mb-12"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, delay: 0.4 },
            }}
            exit={{ opacity: 0 }}
          >
            In my free time, I work on my side projects, learning and hopping on
            the latest framework trends. Outside of programming, I enjoy playing
            the guitar.
          </motion.p>
          <img src={guitarBanner} className="2xl:w-[500px]" draggable={false} />
        </div>
      </motion.div>
    </div>
  )
}

export default About
