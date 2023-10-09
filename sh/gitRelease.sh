#!/bin/bash

cd ..
git checkout Dev
git commit . -m "Release Merge"
git push

git checkout main
git commit . -m "release Merge"
git merge Dev
git push

git checkout Release
git commit . -m "release Merge"
git merge main
git push

git checkout Dev