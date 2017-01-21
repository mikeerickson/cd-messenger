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

# if examples/lib does not exist, create
if [ ! -d "./examples/lib" ]; then
  mkdir ./examples/lib
fi

printf "\n ${COL_GREEN}[ •• ${CO_RESET}] ${COL_YELLOW} ==> Copying files to ${COL_CYAN}./examples${COL_GREEN} ...   ${COL_RESET}\n"

# copy built lib files to examples
cp lib/*.js ./examples/lib

# move built index.html
mv lib/index.html ./examples

printf " ${COL_GREEN}[ ok ${CO_RESET}] ${COL_YELLOW} ==> Build Completed Successfully ... ${COL_RESET}\n\n"
