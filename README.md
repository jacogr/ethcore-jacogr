# ethcore JS challenge

[My (jacogr)](https://github.com/jacogr) submission for the [ethcore](https://ethcore.io) JS/HTML/CSS challenge.

## status

[![Build Status](https://travis-ci.org/jacogr/ethcore-jacogr.svg?branch=master)](https://travis-ci.org/jacogr/ethcore-jacogr)
[![Code Climate](https://codeclimate.com/github/jacogr/ethcore-jacogr/badges/gpa.svg)](https://codeclimate.com/github/jacogr/ethcore-jacogr)
[![Issue Count](https://codeclimate.com/github/jacogr/ethcore-jacogr/badges/issue_count.svg)](https://codeclimate.com/github/jacogr/ethcore-jacogr)
[![Test Coverage](https://codeclimate.com/github/jacogr/ethcore-jacogr/badges/coverage.svg)](https://codeclimate.com/github/jacogr/ethcore-jacogr/coverage)

## checking out

- clone repo to get the current version
- `npm install` to install the dependent Node packages (required for building & testing)
- `gulp` to build the source (alternatively use `npm run build`)
- `gulp test` to run the tests (alternatively use `npm test`)

## getting to grips with the code

- [src/pages](src/pages) The Jade files that compiles down to HTML
- [src/styles](src/styles) The Sass files that compiles down to CSS
- [src/scripts/components](src/scripts/components) React components for the various UI elements
- [src/scripts/constants](src/scripts/constants) Both the requirements and overall comments
- [src/scripts/mixins](src/scripts/mixins) Mixins, only used for the global formatter

## tools used

### development

- Mac OS X
- Atom.io editor (all the lovely code highlighting for the web languages)

### frameworks & building

- Gulp as the overall build tool
- Pug (ex Jade) for the HTML pages (who really wants to type <> all day... until we get to JSX that is)
- SASS for the CSS pre-processor (variables, nesting, includes, CSS is code too after all) with cssclean to minify
- Babel for ES2015 -> ES5 compilation (via browserify) and uglify to minify
- React as a JS framework (overkill here, it could/should be just a static page)

### testing

- Mocha with JSDOM for JS testing
- [Travis](https://travis-ci.org/jacogr/ethcore-jacogr) for CI, running the tests, building and deploying [https://jacogr.github.io/ethcore-jacogr](https://jacogr.github.io/ethcore-jacogr)

### code analysis

- ESLint, Sass-lint & pug-lint for static analysis (local, `gulp lint`)
- [CodeClimate](https://codeclimate.com/github/jacogr/ethcore-jacogr) to do analysis (ESLint & GPA) and report on coverage (normally the go-to tool for the latter is Coveralls.io)

## deviations

The initial supplied JS file (included here as [src/scripts/constants/ethcore.js](src/scripts/constants/ethcore.js)) now exports the jobs structure with `module.exports`. In addition this structure was modified slightly -

- eslint ignores added to the top (`new-cap`)
- `enumerate` function adapted to actually define variables
- `enumerate` function adapted to use `arguments`
- functions defined before they are used
- single-quote strings (JS de-facto standards)
- 2 space indenting (JS de-facto standards)
- `oneof` keys duplicated, this was obviously not intended (2nd would override first, or in the case of Babel it would be merged) - changed to descriptive keys
- there are more changes I would love to make...

## naughty, naughty

- No PRs made, i.e. direct pushes to master (instead of merges) - yes, I know, no excuses, although merging and cheking own work does sound a bit, erm, not right
- This is probably (not probably, it is) very much overkill since we could do the same with static rendered HTML. (Well, the JS does allow us to do some nicer rendering on-demand.) At the same point, it does prove some basics that s useful for larger projects
- Honestly we don't really need a Page and Intro and Sections... it used to be flatter, but when you have a hammer, everything starts looking like a nail. Great for re-usable CV and job sites, not so much as a once-off.
- Coverage could be very misleading since it actually displays the percentage of files you attempt to cover, not all `**/*.js` files. So if you only wrote tests for a small file and have no `**/*.spec.js` for any others, it will be skewed.
- Really should have sorted out the CodeClimate 'issues' (quote-unquote), however these are actually due to CodeClimate using an older version of ESLint
- There are some borderline stupid tests, i.e. sections doesn't actually check that it contains a list of sections
- ...
