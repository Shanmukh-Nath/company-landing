#!/bin/bash

# Fetch latest changes
git fetch origin

echo "Switching to main..."
git checkout main

echo "Pulling latest main..."
git pull origin main

echo "Merging dev into main..."
git merge dev

echo "Pushing updated main..."
git push origin main

echo "Merge complete!"
git switch dev
