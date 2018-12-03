#!/usr/bin/env node

/**
 *
 * Usage: yarn scaffold <componentName>
 *
 * */

const { readFileSync, writeFileSync, mkdirSync } = require('fs')
const { resolve } = require('path')
const { camel, kebab } = require('case')

const componentName = process.argv[2]

if (!componentName) {
  console.error('Usage: node scaffold.js <componentName>')
  process.exit(1)
}

const basePath = `src/${componentName}`

const scaffold = (template, destination) => {
  const contents = readFileSync(
    resolve(`scripts/scaffolding/${template}`),
    'utf8'
  )
    .replace(/\$COMPONENT\$/g, componentName)
    .replace(/\$COMPONENT_CAMEL\$/g, camel(componentName))
    .replace(/\$COMPONENT_KEBAB\$/g, kebab(componentName))

  writeFileSync(resolve(`${basePath}/${destination}`), contents)

  console.log(`Created ${basePath}/${destination}`)
}

mkdirSync(resolve(basePath))
mkdirSync(resolve(`${basePath}/__tests__`))
mkdirSync(resolve(`${basePath}/stories`))

scaffold('Component.js', `${componentName}.js`)
scaffold('Component.stories.js', `stories/${componentName}.stories.js`)
scaffold('Component.test.js', `__tests__/${componentName}.test.js`)
scaffold('index.js', 'index.js')
