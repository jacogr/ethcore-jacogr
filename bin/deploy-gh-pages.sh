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
git merge master

# add the build arttifacts
git add --force client.css client.js index.html
git commit -m "[CI skip] push to gh-pages"

# send it up to the gh-pages branch
git push --force --quiet "https://${GH_TOKEN}@github.com/jacogr/ethcore-jacogr.git" gh-pages > /dev/null 2>&1
