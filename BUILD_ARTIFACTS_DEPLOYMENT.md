# Build Artifacts Deployment

## Overview

This document describes how the project's build artifacts are automatically deployed to the `dist` branch.

## Automated Deployment

A GitHub Actions workflow (`.github/workflows/build-dist.yml`) has been created to automatically:

1. Build the project using `npm run build-prod`
2. Create/update the `dist` branch
3. Commit the build artifacts to the `dist` branch
4. Push the changes to the remote repository

### Workflow Triggers

The workflow runs:
- On every push to the `main` branch
- Manually via workflow_dispatch

### What Gets Committed

The following build artifacts are committed to the `dist` branch:
- `dist/` directory containing all compiled files:
  - `dist/index.mjs` and `dist/index.cjs` - Main entry points
  - `dist/genai.d.ts` - TypeScript declarations
  - `dist/node/` - Node.js specific builds
  - `dist/web/` - Web/browser specific builds
  - Source maps and type definition files

### How It Works

1. The workflow checks out the code
2. Installs dependencies with `npm ci`
3. Runs the production build: `npm run build-prod`
4. Switches to the `dist` branch (creating it if needed)
5. Modifies `.gitignore` to allow the `dist/` folder
6. Commits all build artifacts
7. Force pushes to the `dist` branch

## Manual Build

To manually build and verify the artifacts locally:

```bash
# Install dependencies
npm install

# Run production build
npm run build-prod

# Verify build output
ls -la dist/
```

## Local Testing of dist Branch

A local `dist` branch has been created with the current build artifacts to demonstrate the solution. To view it:

```bash
# Switch to dist branch
git checkout dist

# View the build artifacts
ls -la dist/

# Switch back to main branch
git checkout main
```

Note: The local `dist` branch serves as a demonstration. The automated workflow will maintain the remote `dist` branch going forward.
