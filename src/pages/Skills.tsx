import { useState } from 'react'
import { motion } from 'framer-motion'
import popMP3 from '../assets/pop.mp3'

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
]

interface Skill {
  skillKey: SkillKeys
  name: string
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
      type: 'language',
      description: { experience: 'main choice of language', year: '4+ years' },
      position: 'left-[15%] top-[20%]',
    },
    {
      skillKey: 'javascript',
      name: 'javascript',
      type: 'language',
      description: {
        year: '4+ years',
        experience:
          'proficient through typescript and experienced in associated frameworks',
      },
      position: 'left-[20%] top-[50%]',
    },
    {
      skillKey: 'html_css',
      name: 'html+css',
      type: 'markup',
      description: {
        year: '4+ years',
        experience: 'used in all my web projects',
      },
      position: 'left-[10%] top-[70%]',
    },
    {
      skillKey: 'java',
      name: 'java',
      type: 'language',
      description: {
        year: '5+ years',
        experience:
          'language used in data structures course and object-orientated programming courses',
      },
      position: 'right-[5%] top-[20%]',
    },
    {
      skillKey: 'c',
      name: 'c',
      type: 'language',
      description: {
        year: '1+ years',
        experience: 'introductory to functional programming course',
      },
      position: 'right-[15%] top-[50%]',
    },
    {
      skillKey: 'python',
      name: 'python',
      type: 'language',
      description: {
        experience: 'introductory language and used in course data assignments',
        year: '1+ years',
      },
      position: 'right-[15%] top-[70%]',
    },
  ],

  frameworks: [
    {
      skillKey: 'nodejs',
      name: 'nodejs',
      type: 'environment',
      description: {
        experience: 'experience ranges through all my js/ts projects',
        year: '4+ years',
      },
      position: 'left-[25%] top-[30%]',
    },
    {
      skillKey: 'reactjs',
      name: 'reactjs',
      type: 'framework',
      description: {
        year: '4+ years',
        experience: 'used in all my web projects',
      },
      position: 'right-[25%] top-[20%]',
    },
    {
      skillKey: 'tailwindcss',
      name: 'tailwindcss',
      type: 'framework',
      description: {
        year: '2+ years',
        experience: 'main choice of style customization',
      },
      position: 'left-[25%] top-[80%]',
    },
    {
      skillKey: 'threejs',
      name: 'threejs',
      type: 'framework',
      description: {
        year: '1+ years',
        experience: 'beginner experience from building this website',
      },
      position: 'right-[5%] top-[40%]',
    },
    {
      skillKey: 'reduxjs',
      name: 'reduxjs',
      type: 'framework',
      description: {
        year: '4+ years',
        experience: 'used in every react project for state management',
      },
      position: 'right-[25%] top-[80%]',
    },
  ],

  other: [
    {
      skillKey: 'git',
      name: 'git',
      type: 'software',
      description: {
        year: '4+ years',
        experience:
          'experienced with collaborative and independent project version control',
      },
      position: 'left-[10%] top-[40%]',
    },
    {
      skillKey: 'blender',
      name: 'blender',
      type: 'software',
      description: {
        year: '1+ years',
        experience:
          'experience from building various models for my game projects',
      },
      position: 'right-[20%] top-[30%]',
    },
  ],
}

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryKeys | 'all'
  >('all')

  const [visibility, setVisibility] = useState(false)

  const toggleVisibility = () => setVisibility(!visibility)

  const toggleCategory = (category: CategoryKeys | 'all') => {
    if (category === selectedCategory) {
      setSelectedCategory('all') // If the same category is selected again, set it to 'all'
    } else {
      setSelectedCategory(category)
    }
  }

  function SkillItem(props: Skill) {
    return (
      <li className={`float-text-sm ${props.position}`}>
        <h2 className="w-fit transform transition-all hover:scale-125">
          {props.name}
        </h2>
        <h3 className="text-sm">{props.type}</h3>
        <p className="ml-4 text-sm font-body animate-pop-out">
          {visibility ? props.description.experience : props.description.year}
        </p>
      </li>
    )
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
          className="h1 mt-12 w-fit self-center cursor-pointer hover:text-base-100 transform transition-all hover:scale-125 active:animate-pop-in-out"
          onClick={() => {
            const pop = new Audio(popMP3)
            pop.play()
          }}
        >
          Skills
        </h1>
        {/* languages, frameworks, other */}
        <ul className="flex flex-row mt-2 justify-center font-body space-x-2 decoration-2 underline-offset-2">
          {Object.keys(skillCategories).map((category) => (
            <li
              key={category}
              className={`cursor-pointer hover:underline ${
                category === selectedCategory
                  ? 'font-semibold text-base-100'
                  : 'hover:text-base-100 text-base-content'
              }`}
              onClick={() => toggleCategory(category as CategoryKeys)}
            >
              {category}
            </li>
          ))}
        </ul>
        {/* eye */}
        <i
          className="mt-2 fa-solid fa-eye w-fit text-xl self-center cursor-pointer hover:text-base-100 transform transition-transform hover:scale-125"
          onClick={toggleVisibility}
        />
      </motion.div>
      {/* floating skill containers */}
      <motion.div
        className="absolute left-0 top-0 w-screen h-screen"
        exit={{ scale: 0, transition: { duration: 0.2 } }}
      >
        {Object.entries(skillCategories).map(([category, skills]) => (
          <ul
            key={category}
            className={`absolute w-full h-full ${
              selectedCategory === category || selectedCategory === 'all'
                ? 'animate-shoot-out'
                : 'animate-shoot-in'
            }`}
          >
            {/* skill content */}
            {skills.map((skill) => (
              <SkillItem key={skill.skillKey} {...skill} />
            ))}
          </ul>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
