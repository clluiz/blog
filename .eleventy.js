const fs = require('fs')
const path = require('path')

const cssnano = require('cssnano')
const postcss = require('postcss')
const tailwindcss = require('@tailwindcss/postcss')
const { DateTime } = require('luxon')
const schema = require('@quasibit/eleventy-plugin-schema')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')


module.exports = function (eleventyConfig) {

  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true })
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(schema)
  eleventyConfig.addFilter('date', (dateObj, format) => {
    // Set the zone to UTC to prevent timezone shifts
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format)
  })

  eleventyConfig.addFilter('readTime', (value) => {
    const content = value
    const textOnly = content.replace(/(<([^>]+)>)/gi, '')
    const readingSpeedPerMin = 450
    return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin))
  })

  eleventyConfig.addCollection('tagList', collection => {
    const tagsSet = new Set()
    collection.getAll().forEach(item => {
      if (!item.data.tags) return
      item.data.tags
        .filter(tag => !['posts', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  })  

  eleventyConfig.addPassthroughCopy('src/assets/images')
  eleventyConfig.addPassthroughCopy('src/llms.txt')
  eleventyConfig.addPassthroughCopy('src/robots.txt')

  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/assets/styles/index.css')

    const tailwindOutputPath = './_site/assets/styles/index.css'

    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8')

    const outputDir = path.dirname(tailwindOutputPath)
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    })

    fs.writeFileSync(tailwindOutputPath, result.css)
  })

  const processor = postcss([
    //compile tailwind
    tailwindcss(),

    //minify tailwind css
    cssnano({
      preset: 'default',
    }),
  ])

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  }
}