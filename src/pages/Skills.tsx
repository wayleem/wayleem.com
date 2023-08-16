import React, { useState } from 'react'

function Skills() {
  type SkillKeys =
    | 'typescript'
    | 'javascript'
    | 'java'
    | 'c'
    | 'python'
    | 'html_css'
    | 'reactjs'
    | 'reduxjs'
    | 'git'
    | 'nodejs'
    | 'tailwindcss'
    | 'threejs'
    | 'blender'

  const [visibility, setVisibility] = useState({
    typescript: false,
    javascript: false,
    java: false,
    c: false,
    python: false,
    html_css: false,
    reactjs: false,
    reduxjs: false,
    git: false,
    nodejs: false,
    tailwindcss: false,
    threejs: false,
    blender: false,
  })

  const toggleVisibility = (key: SkillKeys) => {
    console.log('click')
    setVisibility({
      ...visibility,
      [key]: !visibility[key],
    })
  }

  return (
    <div className="select-none">
      <h1 className="h1 mt-12 text-center">Skills</h1>
      <ul className="w-1/2">
        <li className="float-text-sm left-[15%] top-[20%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('typescript')}
          >
            typescript
          </h2>
          <h3 className="text-sm">language</h3>
          {visibility.typescript && (
            <h4 className="ml-4 text-sm font-body">main choice of language</h4>
          )}
        </li>
        <li className="float-text-sm left-[25%] top-[30%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('javascript')}
          >
            javascript
          </h2>
          <h3 className="text-sm">language</h3>
          {visibility.javascript && (
            <h4 className="ml-4 text-sm font-body">
              proficiency through typescript
            </h4>
          )}
        </li>
        <li className="float-text-sm left-[10%] top-[40%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('java')}
          >
            java
          </h2>
          <h3 className="text-sm">language</h3>
          {visibility.java && (
            <h4 className="ml-4 text-sm font-body">
              language used in data structures course and object-orientated
              programming
            </h4>
          )}
        </li>
        <li className="float-text-sm left-[20%] top-[50%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('c')}
          >
            c
          </h2>
          <h3 className="text-sm">language</h3>
          {visibility.c && (
            <h4 className="ml-4 text-sm font-body">
              introductory to functional programming course
            </h4>
          )}
        </li>
        <li className="float-text-sm left-[25%] top-[60%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('python')}
          >
            python
          </h2>
          <h3 className="text-sm">language</h3>
          {visibility.python && (
            <h4 className="ml-4 text-sm font-body">
              introductory language and data analytical courses
            </h4>
          )}
        </li>
        <li className="float-text-sm left-[10%] top-[70%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('html_css')}
          >
            html+css
          </h2>
          <h3 className="text-sm">markup</h3>
          {visibility.html_css && (
            <h4 className="ml-4 text-sm font-body">used in all web projects</h4>
          )}
        </li>
      </ul>
      <ul className="w-1/2">
        <li className="float-text-sm right-[25%] top-[20%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('reactjs')}
          >
            reactjs
          </h2>
          <h3 className="text-sm">framework</h3>
          {visibility.reactjs && (
            <h4 className="ml-4 text-sm font-body">used in all web projects</h4>
          )}
        </li>
        <li className="float-text-sm right-[5%] top-[20%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('reduxjs')}
          >
            reduxjs
          </h2>
          <h3 className="text-sm">framework</h3>
          {visibility.reduxjs && (
            <h4 className="ml-4 text-sm font-body">
              used in every react project for state management
            </h4>
          )}
        </li>
        <li className="float-text-sm right-[20%] top-[30%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('git')}
          >
            git
          </h2>
          <h3 className="text-sm">software</h3>
          {visibility.git && (
            <h4 className="ml-4 text-sm font-body">
              used in various collaborative and independent projects for version
              control
            </h4>
          )}
        </li>
        <li className="float-text-sm right-[5%] top-[40%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('nodejs')}
          >
            nodejs
          </h2>
          <h3 className="text-sm">environment</h3>
          {visibility.nodejs && (
            <h4 className="ml-4 text-sm font-body">
              used in all js/ts projects
            </h4>
          )}
        </li>
        <li className="float-text-sm right-[15%] top-[50%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('tailwindcss')}
          >
            tailwindcss
          </h2>
          <h3 className="text-sm">framework</h3>
          {visibility.tailwindcss && (
            <h4 className="ml-4 text-sm font-body">
              main choice of style customization
            </h4>
          )}
        </li>
        <li className="float-text-sm right-[15%] top-[70%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('threejs')}
          >
            threejs
          </h2>
          <h3 className="text-sm">framework</h3>
          {visibility.threejs && (
            <h4 className="ml-4 text-sm font-body">
              beginner level, used for this website
            </h4>
          )}
        </li>
        <li className="float-text-sm right-[25%] top-[80%]">
          <h2
            className="cursor-pointer hover:underline"
            onClick={() => toggleVisibility('blender')}
          >
            blender
          </h2>
          <h3 className="text-sm">software</h3>
          {visibility.blender && (
            <h4 className="ml-4 text-sm font-body">
              used in creating custom models for various game projects
            </h4>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Skills
