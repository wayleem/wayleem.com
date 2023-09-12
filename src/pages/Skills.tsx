import { useState } from 'react'
import { motion } from 'framer-motion'
import typescriptSVG from '../assets/icons/typescript.svg'
import javascriptSVG from '../assets/icons/javascript.svg'
import javaSVG from '../assets/icons/java.svg'
import cSVG from '../assets/icons/c.svg'
import pythonSVG from '../assets/icons/python.svg'
import htmlSVG from '../assets/icons/html.svg'
import reactSVG from '../assets/icons/reactjs.svg'
import reduxSVG from '../assets/icons/reduxjs.svg'
import gitSVG from '../assets/icons/git.svg'
import nodeSVG from '../assets/icons/nodejs.svg'
import tailwindSVG from '../assets/icons/tailwindcss.svg'
import threeSVG from '../assets/icons/three.svg'
import blenderSVG from '../assets/icons/blender.svg'
import sqlSVG from '../assets/icons/sql.svg'
import vbSVG from '../assets/icons/visualbasic.svg'
import popMP3 from '../assets/audio/pop.mp3'

type SkillKeys = (typeof SKILL_KEYS)[number]
type CategoryKeys = 'languages' | 'frameworks' | 'other'

const SKILL_KEYS = [
  'typescript',
  'javascript',
  'java',
  'c',
  'python',
  'html_css',
  'reactjs',
  'reduxjs',
  'git',
  'nodejs',
  'tailwindcss',
  'threejs',
  'blender',
  'visual_basic',
  'sql',
]

interface Skill {
  skillKey: SkillKeys
  name: string
  icon: string
  type: string
  description: {
    year: string
    experience: string
  }
  position: string
}

const skillCategories: Record<CategoryKeys, Skill[]> = {
  languages: [
    {
      skillKey: 'typescript',
      name: 'typescript',
      icon: typescriptSVG,
      type: 'language',
      description: { experience: 'main choice of language', year: '4+ years' },
      position:
        'md:row-start-2 md:col-start-2 xl:justify-self-center md:justify-self-start',
    },
    {
      skillKey: 'javascript',
      name: 'javascript',
      icon: javascriptSVG,
      type: 'language',
      description: {
        year: '4+ years',
        experience:
          'proficient through typescript and experienced in associated frameworks',
      },
      position:
        'md:row-start-3 md:col-start-3 xl:justify-self-center md:justify-self-start',
    },
    {
      skillKey: 'html_css',
      name: 'html+css',
      icon: htmlSVG,
      type: 'markup',
      description: {
        year: '4+ years',
        experience: 'used in all my web projects',
      },
      position:
        'md:row-start-4 md:col-start-1 xl:justify-self-center md:justify-self-start',
    },
    {
      skillKey: 'java',
      name: 'java',
      icon: javaSVG,
      type: 'language',
      description: {
        year: '5+ years',
        experience:
          'language used in data structures course and object-orientated programming courses',
      },
      position:
        'md:row-start-5 md:col-start-4 xl:justify-self-center md:justify-self-start',
    },
    {
      skillKey: 'c',
      name: 'c',
      icon: cSVG,
      type: 'language',
      description: {
        year: '1+ years',
        experience: 'introductory to functional programming course',
      },
      position: 'md:row-start-2 md:col-start-6 md:justify-self-end',
    },
    {
      skillKey: 'python',
      name: 'python',
      icon: pythonSVG,
      type: 'language',
      description: {
        experience: 'introductory language and used in course data assignments',
        year: '1+ years',
      },
      position: 'md:row-start-2 md:col-start-8 md:justify-self-end',
    },
    {
      skillKey: 'sql',
      name: 'SQL',
      icon: sqlSVG,
      type: 'language',
      description: {
        year: '1+ years',
        experience: 'used in database coursework',
      },
      position: 'md:row-start-3 md:col-start-9 md:justify-self-end',
    },

    {
      skillKey: 'visual_basic',
      name: 'Visual Basic',
      icon: vbSVG,
      type: 'language',
      description: {
        year: '1+ years',
        experience: 'used in excel macros coursework',
      },
      position: 'md:row-start-5 md:col-start-6 md:justify-self-end',
    },
  ],

  frameworks: [
    {
      skillKey: 'nodejs',
      name: 'nodejs',
      icon: nodeSVG,
      type: 'environment',
      description: {
        experience: 'experience ranges through all my js/ts projects',
        year: '4+ years',
      },
      position:
        'md:row-start-2 md:col-start-4 xl:justify-self-center md:justify-self-start',
    },
    {
      skillKey: 'reactjs',
      name: 'reactjs',
      icon: reactSVG,
      type: 'framework',
      description: {
        year: '4+ years',
        experience: 'used in all my web projects',
      },
      position:
        'md:row-start-3 md:col-start-1 xl:justify-self-center md:justify-self-start',
    },
    {
      skillKey: 'tailwindcss',
      name: 'tailwindcss',
      icon: tailwindSVG,
      type: 'framework',
      description: {
        year: '2+ years',
        experience: 'main choice of style customization',
      },
      position:
        'md:row-start-5 md:col-start-2 xl:justify-self-center md:justify-self-start',
    },
    {
      skillKey: 'threejs',
      name: 'threejs',
      icon: threeSVG,
      type: 'framework',
      description: {
        year: '1+ years',
        experience: 'beginner experience from building this website',
      },
      position: 'md:row-start-3 md:col-start-7 md:justify-self-end',
    },
    {
      skillKey: 'reduxjs',
      name: 'reduxjs',
      icon: reduxSVG,
      type: 'framework',
      description: {
        year: '4+ years',
        experience: 'used in every react project for state management',
      },
      position: 'md:row-start-5 md:col-start-8 md:justify-self-end',
    },
  ],

  other: [
    {
      skillKey: 'git',
      name: 'git',
      icon: gitSVG,
      type: 'software',
      description: {
        year: '4+ years',
        experience:
          'experienced with collaborative and independent project version control',
      },
      position:
        'md:row-start-4 md:col-start-3 xl:justify-self-center md:justify-self-start',
    },
    {
      skillKey: 'blender',
      name: 'blender',
      icon: blenderSVG,
      type: 'software',
      description: {
        year: '1+ years',
        experience:
          'experience from building various models for my game projects',
      },
      position: 'md:row-start-4 md:col-start-7 md:justify-self-end',
    },
  ],
}

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryKeys | 'all'
  >('all')

  const toggleCategory = (category: CategoryKeys | 'all') => {
    if (category === selectedCategory) {
      setSelectedCategory('all')
    } else {
      setSelectedCategory(category)
    }
  }

  function SkillItem(props: Skill) {
    return (
      <li className={`subtitle-text md:w-[20%] mb-5 ${props.position}`}>
        <div className="flex flex-row space-x-2 transform transition-all md:hover:scale-125">
          <img src={props.icon} className="w-4 md:w-full" />
          <h2>{props.name}</h2>
        </div>
        <h3 className="hidden md:block ml-12 text-sm w-fit">{props.type}</h3>
        <p className="md:ml-16 text-sm font-body">{props.description.year}</p>
      </li>
    )
  }

  return (
    <div className="p-4">
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
          className="h2 mt-16 w-fit pointer-events-auto md:self-center md:hover:text-base-100 transform transition-all md:hover:scale-105 md:active:animate-pop-in-out"
          onClick={() => {
            if (window.innerWidth > 768) {
              const pop = new Audio(popMP3)
              pop.play()
              toggleCategory('all')
            }
          }}
        >
          SKILLS
        </h1>
        {/* languages, frameworks, other */}
        <span className="hidden md:flex flex-row mt-2 justify-center font-body space-x-2 decoration-2 underline-offset-2">
          {Object.keys(skillCategories).map((category) => (
            <h2
              key={category}
              className={`cursor-pointer pointer-events-auto hover:underline ${
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
      {/* desktop skill containers */}
      <div className="hidden md:block">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <ul
            key={category}
            className={`absolute inset-0 w-full h-full ${
              selectedCategory === category || selectedCategory === 'all'
                ? 'animate-shoot-out'
                : 'animate-shoot-in'
            }`}
          >
            <motion.div
              className="grid grid-rows-5 grid-cols-10 absolute p-32 inset-0 w-full h-full"
              exit={{ scale: 0, transition: { duration: 0.2 } }}
            >
              {/* skill content */}
              {skills.map((skill) => (
                <SkillItem key={skill.skillKey} {...skill} />
              ))}
            </motion.div>
          </ul>
        ))}
      </div>
      <div className="md:hidden mt-8">
        {/* mobile skill containers */}
        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div
            key={category}
            initial={{ translateX: -1000 }}
            animate={{
              translateX: [-1000, 20, 0],
              transition: {
                duration: 0.5,
                times: [0, 0.8, 1],
                ease: 'easeInOut',
              },
            }}
            exit={{ translateX: 1000, transition: { duration: 0.2 } }}
          >
            <h2 className="body">{category}</h2>
            <ul className="grid grid-cols-2 gap-4 p-8">
              {/* <-- Added grid classes here */}
              {skills.map((skill) => (
                <SkillItem key={skill.skillKey} {...skill} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
