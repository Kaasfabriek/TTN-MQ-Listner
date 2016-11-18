# The Things Network - Nodejs logger
This is a small program where you can quickly setup a nodejs express server that listen to a connected device to The Things Network (TTN).

TTN has a Nodejs client library https://www.npmjs.com/package/ttn what we will using.

This small example will only listen to the node of the TTN and do a CURL command with some of the fields that are interesting for further use.

It's mainly just a PoC to check if your node is working.
You will get a clear idea about how everything is connected and communicating wich each other.

## Installation

- `git clone https://github.com/Kaasfabriek/TTN-Nodejs-Single-Node-Listner.git`
- `cd TTN-Nodejs-Single-Node-Listner`
- `npm install`

## Config
Place your own node credentials keys, current are borrowed from https://github.com/ErwinCom.
- appEUI (example: `70B3D54ED300157B`)
- accessKey (example `DTiL3gk0tsbaxho64xIcouJHeoyyBVYERzCTlJygPOU=`)

## Starting up app
Just type `npm start` and let the logging begin.

## Toubleshooting
Drop a line if you can't figure out how to get this running. Also without recieving data the console stays empty, good to know. Check on the TTN side is everything works.
