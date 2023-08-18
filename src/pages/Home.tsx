import { useState } from 'react'
import { motion } from 'framer-motion'
import poofMP3 from '../assets/audio/poof.mp3'

function Home() {
  const [languageIndex, setLanguageIndex] = useState(0)

  const welcomeMessages = [
    { lang: 'English', message: ['W', 'e', 'l', 'c', 'o', 'm', 'e'] },
    {
      lang: 'German',
      message: ['W', 'i', 'l', 'l', 'k', 'o', 'm', 'm', 'e', 'n'],
    },
    { lang: 'Swedish', message: ['V', 'ä', 'l', 'k', 'o', 'm', 'm', 'e', 'n'] },
    {
      lang: 'Spanish',
      message: ['B', 'i', 'e', 'n', 'v', 'e', 'n', 'i', 'd', 'o'],
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
  ]

  const poof = new Audio(poofMP3)

  const toggleLanguage = () => {
    poof.play()
    setLanguageIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length)
  }
  return (
    <motion.div
      className="text-center"
      initial={{ scale: 0 }}
      animate={{
        scale: [0, 1.05, 1],
        transition: { duration: 0.8, ease: 'easeOut' },
      }}
      exit={{ scale: 0, transition: { duration: 0.1 } }}
    >
      <div className="flex flex-row justify-center h1 mt-[10%] pointer-events-auto">
        {welcomeMessages[languageIndex].message.map((letter, index) => (
          <h1
            key={index}
            className="transform transition-all hover:scale-125 hover:-translate-y-2"
            onClick={toggleLanguage}
          >
            {letter}
          </h1>
        ))}
      </div>
      <h2 className="subtitle-text mt-[25%]">
        (You can rotate the cube by dragging)
      </h2>
    </motion.div>
  )
}

export default Home
