import { motion } from 'framer-motion'
import { useState } from 'react'
import sbuBanner from '../assets/icons/sbu.png'
import cityBanner from '../assets/icons/city.png'
import guitarBanner from '../assets/icons/guitar.png'
import popMP3 from '../assets/audio/pop.mp3'

function About() {
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [nameIndex, setNameIndex] = useState(0)

  const greetings = ['HELLO,', 'WASSUP,', 'HEY!', 'HI,']
  const names = ["I'M WILLIAM.", "IT'S WILLIAM!", 'WILLIAM HERE.']

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
    <div className="p-8 md:-mt-10 flex flex-col">
      {/* about me content */}
      <motion.div
        className="flex flex-col space-y-8 md:flex-none md:grid md:absolute grid-rows-3 grid-cols-3 md:px-32 md:pb-32 w-full inset-0"
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
        {/* greeting card */}
        <div className="flex flex-col md:text-center text-start row-start-1 col-start-2">
          <motion.div
            className="md:mt-16 w-fit md:self-center pointer-events-auto"
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
            <span className="h2 w-fit space-y-4">
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
            className="body mt-6 -mb-16 md:mb-0 w-full md:self-center self-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.4 } }}
            exit={{ opacity: 0 }}
          >
            Welcome to my portfolio. I am a student developer pursuing a career
            in software engineering.
          </motion.p>
        </div>
        {/* life body */}
        <div className="row-start-2 col-start-1 self-center">
          <img
            src={cityBanner}
            className="-z-10 2xl:w-[550px] mb-4 lg:mb-0 opacity-50"
            draggable={false}
          />
          <h1 className="font-subtitle md:text-4xl text-3xl text-readable -mt-16">
            Life
          </h1>
          <motion.p
            className="body mt-4 lg:mt-8 2xl:mb-16"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, delay: 0.4 },
            }}
            exit={{ opacity: 0 }}
          >
            I grew up in NYC from a Chinese household. I've always loved making
            and building things, which make sense of why I pursue a career in
            SWE.
          </motion.p>
        </div>
        {/* education body */}
        <div className="flex flex-col row-start-2 col-start-3 self-center">
          <img
            src={sbuBanner}
            className="2xl:w-[450px] md:mt-0 md:mb-2 mt-4 order-3 md:order-none"
            draggable={false}
          />
          <h1 className="font-subtitle md:text-4xl text-3xl text-readable md:-mt-2 order-1 md:order-none">
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
          <h1 className="font-subtitle md:text-4xl text-3xl text-readable">
            Hobbies
          </h1>
          <motion.p
            className="body mt-4 -mb-4 xl:-mb-12 md:-mb-4"
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
