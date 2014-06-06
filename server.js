#!/bin/env node

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

if (typeof self.ipaddress === "undefined") {
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    self.ipaddress = "127.0.0.1";
};

http.listen(self.port, function(){
  console.log('listening on *:', self.port);
});
var express = require('express');
var fs      = require('fs');