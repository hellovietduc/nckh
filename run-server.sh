#!/usr/bin/bash

cyan=$(tput setaf 6)
reset=$(tput sgr0)
log() {
    echo "${cyan}${1}${reset}"
}

cd server
log "Start server"
npm start
