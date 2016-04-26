# ethcore JS challenge

[My (jacogr)](https://github.com/jacogr) submission for the [ethcore](https://ethcore.io) JS/HTML/CSS challenge.

## checking out

- clone repo to get the current version
- `npm install` to install the dependent Node packages (building)
- `gulp` to build the source (alternatively use `npm run build`)
- `gulp test` to run the tests (alternatively use `npm run test`)
- open `index.html` in your browser

## tools used

- Mac OS X
- Atom.io editor (all the lovely code highlighting for the web languages)
- Gulp as the overall build tool
- Pug (ex Jade) for the HTML pages (who really wants to type <> all day... until we get to JSX that is)
- SASS for the CSS pre-processor (variables, nesting, includes, CSS is code too after all) with cssclean to minify
- Babel for ES2015 -> ES5 compilation (via browserify) and uglify to minify
- React as a JS framework (overkill here, it could/should be just a static page)
- Mocha for JS testing
- ESLint, Sass-lint & pug-lint for static analysis (along with CodeClimate for a GPA of the JS code)
- Travis for CI, running the tests and building for [http://ethcore-jacogr.github.io](http://ethcore-jacogr.github.io)

## deviations

The initial supplied JS file (included here as (src/components/ethcore.js)[src/components/ethcore.js]) now exports the jobs structure with `module.exports`. In addition this structure was modified slightly -

- eslint ignores added to the top (`new-cap`)
- `enumerate` function adapted to actually define variables
- `enumerate` function adapted to use `arguments`
- functions defined before they are used
- single-quote strings (JS de-facto standards)
- 2 space indenting (JS de-facto standards)
- `oneof` keys duplicated, this was obviously not intended (2nd would override first, or in the case of Babel it would be merged) - changed to descriptive keys
- there are more changes I would love to make...
