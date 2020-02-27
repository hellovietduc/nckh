#!/usr/bin/bash

cyan=$(tput setaf 6)
reset=$(tput sgr0)
log() {
    echo "${cyan}${1}${reset}"
}

log "Step 1/2: Install dependencies"
cd server
npm install --production
cd ..
cd client
npm install --production
cd ..

log "Step 2/2: Build React app"
cd client
npm run build
cd ..
