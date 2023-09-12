import { useState } from 'react'
import { motion } from 'framer-motion'
import poofMP3 from '../assets/audio/poof.mp3'

function Home() {
  const [languageIndex, setLanguageIndex] = useState(0)

  const welcomeMessages = [
    { lang: 'English', message: ['W', 'E', 'L', 'C', 'O', 'M', 'E'] },
    {
      lang: 'Spanish',
      message: ['B', 'I', 'E', 'N', 'V', 'E', 'N', 'I', 'D', 'O'],
    },
    { lang: 'Chinese', message: ['欢', '迎'] },

    { lang: 'Korean', message: ['안', '녕', '하', '세', '요'] },
    { lang: 'Japanese', message: ['よ', 'う', 'こ', 'そ'] },
    {
      lang: 'Arabic',
      message: ['أ', 'ه', 'ل', 'ا', ' ', 'و', 'س', 'ه', 'ل', 'ا'],
    },
    {
      lang: 'Hebrew',
      message: ['ב', 'ר', 'ו', 'כ', 'י', 'ם', ' ', 'ה', 'ב', 'א', 'י', 'ם'],
    },
    {
      lang: 'Russian',
      message: [
        'Д',
        'о',
        'б',
        'р',
        'о',
        ' ',
        'п',
        'о',
        'ж',
        'а',
        'л',
        'о',
        'в',
        'а',
        'т',
        'ь',
      ],
    },
    {
      lang: 'German',
      message: ['W', 'I', 'L', 'L', 'K', 'O', 'M', 'M', 'E', 'N'],
    },
  ]

  const poof = new Audio(poofMP3)

  const toggleLanguage = () => {
    if (window.innerWidth > 768) poof.play()
    setLanguageIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length)
  }
  return (
    <div>
      {/* welcome */}
      <motion.div
        className="absolute flex flex-row justify-center h1 inset-x-0 top-[20%] pointer-events-auto"
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1.05, 1],
          transition: { duration: 0.8, ease: 'easeOut' },
        }}
        exit={{ scale: 0, transition: { duration: 0.1 } }}
      >
        {welcomeMessages[languageIndex].message.map((letter, index) => (
          <h1
            key={index}
            className="transform transition-all md:hover:scale-125 md:hover:-translate-y-2"
            onClick={toggleLanguage}
          >
            {letter}
          </h1>
        ))}
      </motion.div>
      {/* hint */}
      <motion.h2
        className="subtitle-text text-center absolute inset-x-0 bottom-[20%]"
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1.05, 1],
          transition: { duration: 0.8, ease: 'easeOut' },
        }}
        exit={{ scale: 0, transition: { duration: 0.1 } }}
      >
        (You can rotate the cube by dragging)
      </motion.h2>
    </div>
  )
}

export default Home
