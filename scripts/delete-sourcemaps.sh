#! /bin/sh

# this is only called when producing production build
if [ -f "./lib/messenger.js.map" ]; then
  rm lib/messenger.js.map
fi
