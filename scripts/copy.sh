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

mkdir ./examples/lib
cp lib/*.js ./examples/lib
printf " [${COL_GREEN} ok ${CO_RESET}] ${COL_YELLOW} ==> Files copied to examples...   ${COL_RESET}\n"
