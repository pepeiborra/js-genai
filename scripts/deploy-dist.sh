#!/bin/bash

# Script to build and deploy artifacts to dist branch
# This script demonstrates the manual process that the GitHub Actions workflow automates

set -e

# Capture the current commit before switching branches
SOURCE_COMMIT=$(git rev-parse HEAD)

echo "Building the project..."
npm run build-prod

echo "Creating/switching to dist branch..."
git checkout -B dist

echo "Modifying .gitignore to allow dist folder..."
# Use a portable sed approach that works on both GNU and BSD sed
if grep -q '^dist/\*\*/\*' .gitignore; then
    # For macOS compatibility, use -i with backup extension, then remove backup
    sed -i.bak 's|^dist/\*\*/\*|# dist/\*\*/\* - Commented out on dist branch to commit build artifacts|' .gitignore
    rm -f .gitignore.bak
fi

echo "Adding build artifacts..."
git add -f .gitignore dist/

echo "Committing changes..."
git commit -m "Build artifacts for commit ${SOURCE_COMMIT}" || echo "No changes to commit"

echo "Pushing to remote dist branch..."
echo "WARNING: This will force push to the dist branch."
read -p "Continue? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Note: This requires appropriate git credentials"
    git push origin dist --force
else
    echo "Push cancelled."
fi

echo "Done! Switching back to previous branch..."
git checkout -
