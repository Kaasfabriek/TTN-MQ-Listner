// MODULES
var express = require('express');
var curl = require('curlrequest');
var app = express();
var ttn = require('ttn');

// CONFIG
var appEUI = '70B3D57ED000137B';
var accessKey = 'CTiL3vk0tsbaxho65xIcouJHeoyyBVYERzCTlJygPOU=';
var client = new ttn.Client('staging.thethingsnetwork.org', appEUI, accessKey);
var logurl = 'http://iot.kaasfabriek.nl/ttnlog/?msg=';

// SERVER
client.on('uplink', function (msg) {
	console.log('Found Message, sending to ' + logurl);
	console.log(msg);
	curl.request({ url: logurl + JSON.stringify(msg)}, function (err, stdout, meta) {
    		console.log('%s %s', meta.cmd, meta.args.join(' '));
	});
});

client.on('activation', function (msg) {
  console.log('Device activated:', msg.devEUI);
});

module.exports = app;
