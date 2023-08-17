import { useState } from 'react'

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

export interface Skill {
  skillKey: SkillKeys
  name: string
  type: string
  description: string
  position: string
}

const skillCategories: Record<CategoryKeys, Skill[]> = {
  languages: [
    {
      skillKey: 'typescript',
      name: 'typescript',
      type: 'language',
      description: 'main choice of language',
      position: 'left-[15%] top-[20%]',
    },
    {
      skillKey: 'javascript',
      name: 'javascript',
      type: 'language',
      description:
        'proficient through typescript and experienced in associated frameworks',
      position: 'left-[20%] top-[50%]',
    },
    {
      skillKey: 'html_css',
      name: 'html+css',
      type: 'markup',
      description: 'used in all my web projects',
      position: 'left-[10%] top-[70%]',
    },
    {
      skillKey: 'java',
      name: 'java',
      type: 'language',
      description:
        'language used in data structures course and object-orientated programming courses',
      position: 'right-[5%] top-[20%]',
    },
    {
      skillKey: 'c',
      name: 'c',
      type: 'language',
      description: 'introductory to functional programming course',
      position: 'right-[15%] top-[50%]',
    },
    {
      skillKey: 'python',
      name: 'python',
      type: 'language',
      description: 'introductory language and used in course data assignments',
      position: 'right-[15%] top-[70%]',
    },
  ],

  frameworks: [
    {
      skillKey: 'nodejs',
      name: 'nodejs',
      type: 'environment',
      description: 'experience ranges through all my js/ts projects',
      position: 'left-[25%] top-[30%]',
    },
    {
      skillKey: 'reactjs',
      name: 'reactjs',
      type: 'framework',
      description: 'used in all my web projects',
      position: 'right-[25%] top-[20%]',
    },
    {
      skillKey: 'tailwindcss',
      name: 'tailwindcss',
      type: 'framework',
      description: 'main choice of style customization',
      position: 'left-[25%] top-[80%]',
    },
    {
      skillKey: 'threejs',
      name: 'threejs',
      type: 'framework',
      description: 'beginner experience from building this website',
      position: 'right-[5%] top-[40%]',
    },
    {
      skillKey: 'reduxjs',
      name: 'reduxjs',
      type: 'framework',
      description: 'used in every react project for state management',
      position: 'right-[25%] top-[80%]',
    },
  ],

  other: [
    {
      skillKey: 'git',
      name: 'git',
      type: 'software',
      description:
        'experienced with collaborative and independent project version control',
      position: 'left-[10%] top-[40%]',
    },
    {
      skillKey: 'blender',
      name: 'blender',
      type: 'software',
      description:
        'experience from building various models for my game projects',
      position: 'right-[20%] top-[30%]',
    },
  ],
}

function Skills() {
  const [visibility, setVisibility] = useState<Record<SkillKeys, boolean>>(
    Object.fromEntries(SKILL_KEYS.map((key) => [key, false])) as Record<
      SkillKeys,
      boolean
    >
  )

  const [selectedCategory, setSelectedCategory] = useState<
    CategoryKeys | 'all'
  >('all')

  const toggleCategory = (category: CategoryKeys | 'all') =>
    setSelectedCategory(category)

  const toggleVisibility = (key?: SkillKeys) => {
    setVisibility((prevVisibility) =>
      key
        ? { ...prevVisibility, [key]: !prevVisibility[key] }
        : (Object.fromEntries(
            SKILL_KEYS.map((k) => [k, !prevVisibility[k]])
          ) as Record<SkillKeys, boolean>)
    )
  }

  function SkillItem(props: Skill) {
    return (
      <li className={`float-text-sm ${props.position}`}>
        <h2
          className="w-fit cursor-pointer transform transition-all hover:scale-125"
          onClick={() => toggleVisibility(props.skillKey)}
        >
          {props.name}
        </h2>
        <h3 className="text-sm">{props.type}</h3>
        <h4
          className={`ml-4 text-sm font-body ${
            visibility[props.skillKey] ? 'animate-pop-out' : 'animate-pop-in'
          }`}
        >
          {props.description}
        </h4>
      </li>
    )
  }

  return (
    <div className="select-none relative">
      {/* top menu */}
      <div className="flex flex-col pointer-events-auto">
        <h1
          className="h1 mt-12 w-fit self-center cursor-pointer hover:text-base-100"
          onClick={() => toggleCategory('all')}
        >
          Skills
        </h1>
        {/* languages, frameworks, other */}
        <ul className="flex flex-row justify-center font-body space-x-2 decoration-2 underline-offset-2">
          {Object.keys(skillCategories).map((category) => (
            <li
              key={category}
              className="cursor-pointer hover:underline hover:text-base-100"
              onClick={() => toggleCategory(category as CategoryKeys)}
            >
              {category}
            </li>
          ))}
        </ul>
        {/* eye */}
        <i
          className="mt-2 fa-solid fa-eye w-fit text-xl self-center cursor-pointer hover:text-base-100 transform transition-transform hover:scale-125 "
          onClick={() => toggleVisibility()}
        />
      </div>
      {/* floating skill containers */}
      <div className="absolute left-0 top-0 w-screen h-screen overflow-hidden">
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
      </div>
    </div>
  )
}

export default Skills
