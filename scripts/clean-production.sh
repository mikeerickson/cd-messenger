#! /bin/sh

# Colors used for status updates
ESC_SEQ="\x1b["
COL_RESET=$ESC_SEQ"39;49;00m"
COL_RED=$ESC_SEQ"31;01m"
COL_GREEN=$ESC_SEQ"32;01m"
COL_YELLOW=$ESC_SEQ"33;01m"
COL_BLUE=$ESC_SEQ"34;01m"
COL_MAGENTA=$ESC_SEQ"35;01m"
COL_CYAN=$ESC_SEQ"36;01m"

# this is only called when producing production build
if [ -f "./dist/messenger.js.map" ]; then
  rm dist/messenger.js.map
fi

printf "\n"
printf " ${COL_GREEN}[ •• ${CO_RESET}] ${COL_YELLOW} ==> Cleaning Production ... ${COL_RESET}\n\n"
