# The Things Network - Nodejs listner
This is a small program where you can quickly setup a nodejs express server that listnes to your connected device to The Things Network (TTN).

TTN has a Nodejs client library https://www.npmjs.com/package/ttn what we will using.

This small example will only listen to the node of the TTN and do a CURL command with some of the fields that are interesting for further use.

It's mainly just a PoC to check if your node is working.
You will get a clear idea about how everything is connected and communicating wich each other.

## What you need

- appEUI (example: `70B3D54ED300157B`)
- accessKey (example `DTiL3gk0tsbaxho64xIcouJHeoyyBVYERzCTlJygPOU=`)
- Website to perform a get request what will save the data for example.

## Installation

- Git clone this repo
- Make sure npm is installed
- Run `npm install`

Now you can just `npm start` and let the logging begin.
