import { motion } from 'framer-motion'

function About() {
  return (
    <div className="ml-12 mt-12">
      <motion.div
        className="flex-col"
        initial={{ translateX: '-20%' }}
        animate={{
          translateX: 0,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        exit={{ translateX: '-20%', transition: { duration: 0.2 } }}
      >
        <h1 className="h1">Hello,</h1>
        <h1 className="h1 mt-8">I'm William</h1>
      </motion.div>
      <motion.div
        className="flex-col ml-16"
        initial={{ translateX: '-40%' }}
        animate={{
          translateX: 0,
          transition: { duration: 0.4, ease: 'easeInOut' },
        }}
        exit={{ translateX: '-40%', transition: { duration: 0.2 } }}
      >
        <p className="body mt-16">I'm currently a student at SBU</p>
        <p className="body mt-8 w-[35%]">
          I am completing a B.S. degree in Technical Systems Management. I have
          taken several programming courses at SBU that had enriched my
          concurrent skillset in programing. I am autodidactive by nature as I
          love learning to use the latest, most prominent technologies, and
          frameworks. There are often cases where I feel that SBU didn't delve
          deeper into my interests, and thats where I go push myself to really
          chase after my dreams.
        </p>
        <p className="body mt-8 w-[35%]">
          I love learning about proper practice. I would sometimes go back where
          I started to retrace my footsteps to really clean up bad habits, and
          pick up good ones. There are many experiences where I learned to be
          humble, and be the student to cultivate myself.
        </p>
        <p className="body mt-8 w-[35%]">
          There are also times where I know I must take the lead. I have no
          problem showing initiative in areas that I am confident in, and areas
          that I am new to.
        </p>
        <p className="body mt-8 w-[35%]">
          Given my experience, I have dealt with Front-End development and Game
          development. I am always open to go outside my comfort zone and pick
          up new experiences to broaden my horizons.
        </p>
      </motion.div>
      <motion.span
        className="float-text-lg right-[30%] top-[5%]"
        initial={{ translateX: '300%' }}
        animate={{
          translateX: 0,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        exit={{ translateX: '-500%', transition: { duration: 0.2 } }}
      >
        Front-End;
      </motion.span>
      <motion.span
        className="float-text-lg right-[10%] top-[40%]"
        initial={{ translateX: '300%' }}
        animate={{
          translateX: 0,
          transition: { duration: 0.7, ease: 'easeInOut' },
        }}
        exit={{ translateX: '-500%', transition: { duration: 0.2 } }}
      >
        Developer;
      </motion.span>
      <motion.span
        className="float-text-lg right-[20%] bottom-[20%]"
        initial={{ translateX: '300%' }}
        animate={{
          translateX: 0,
          transition: { duration: 0.6, ease: 'easeInOut' },
        }}
        exit={{ translateX: '-500%', transition: { duration: 0.2 } }}
      >
        Software Engineer;
      </motion.span>
    </div>
  )
}

export default About
