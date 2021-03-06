#!/bin/bash

# we only want to push master branches
if [ "$TRAVIS_BRANCH" != "master" ]; then
  exit 0
fi

# our user config
git config user.name "Travis CI"
git config user.email "jacogr+travis@gmail.com"
git config --global push.default simple

# checkout the gh-pages branch
git checkout gh-pages
git rebase master

# add the build arttifacts
git add --force client.css client.js index.html
git commit -m "[CI skip] push to gh-pages"

# send it up to the gh-pages branch
git push --quiet --force "https://${GH_TOKEN}@github.com/jacogr/ethcore-jacogr.git" HEAD:gh-pages 2>&1 > /dev/null
