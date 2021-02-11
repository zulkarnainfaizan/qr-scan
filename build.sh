#!/bin/bash
echo "Build Ionic App"
rm -rf www
echo "Removed www folder"
rm -rf android
echo "Removed android folder"
ionic build --prod
echo "Production build success"
npx cap add android
echo "Added android platform"
npx jetify
echo "Jetify"
npx cap sync
echo "Sync"
npx cap open android
