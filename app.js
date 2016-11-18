var express = require('express');
var curl = require('curlrequest');
var app = express();
var ttn = require('ttn');
var appEUI = '70B3D57ED000137B';
var accessKey = 'CTiL3vk0tsbaxho65xIcouJHeoyyBVYERzCTlJygPOU=';
var client = new ttn.Client('staging.thethingsnetwork.org', appEUI, accessKey);

client.on('uplink', function (msg) {
	console.log(msg);
	curl.request({ url: 'http://iot.kaasfabriek.nl/ttnlog/?msg=' + msg }, function (err, stdout, meta) {
    		
		console.log('%s %s', meta.cmd, meta.args.join(' '));
	});
});

client.on('activation', function (msg) {
  console.log('Device activated:', msg.devEUI);
});

module.exports = app;
