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

## tools used

- Mac OS X
- Atom.io editor (all the lovely code highlighting for the web languages)
- Gulp as the overall build tool
- Pug (ex Jade) for the HTML pages (who really wants to type <> all day... until we get to JSX that is)
- SASS for the CSS pre-processor (variables, nesting, includes, CSS is code too after all) with cssclean to minify
- Babel for ES2015 -> ES5 compilation (via browserify) and uglify to minify
- React as a JS framework (overkill here, it could/should be just a static page)
- Mocha for JS testing
- ESLint, Sass-lint & pug-lint for static analysis
- Travis for CI, running the tests and building for [https://jacogr.github.io/ethcore-jacogr](https://jacogr.github.io/ethcore-jacogr)
- CodeClimate to do analysis (ESLint & GPA) and report on coverage (normally the go-to tool for the latter is Coveralls.io)

## deviations

The initial supplied JS file (included here as [src/components/ethcore.js](tree/master/src/components/ethcore.js)) now exports the jobs structure with `module.exports`. In addition this structure was modified slightly -

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
- ...
