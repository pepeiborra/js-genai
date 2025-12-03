#!/bin/bash

# Script to build and deploy artifacts to dist branch
# This script demonstrates the manual process that the GitHub Actions workflow automates

set -e

echo "Building the project..."
npm run build-prod

echo "Creating/switching to dist branch..."
git checkout -B dist

echo "Modifying .gitignore to allow dist folder..."
sed -i 's/^dist\/\*\*\/\*$/# dist\/\*\*\/\* - Commented out on dist branch to commit build artifacts/' .gitignore

echo "Adding build artifacts..."
git add -f .gitignore dist/

echo "Committing changes..."
git commit -m "Build artifacts for commit $(git rev-parse HEAD)" || echo "No changes to commit"

echo "Pushing to remote dist branch..."
echo "Note: This requires appropriate git credentials"
git push origin dist --force

echo "Done! Switching back to previous branch..."
git checkout -
