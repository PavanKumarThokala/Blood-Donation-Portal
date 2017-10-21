var express = require('express');
var mongoose = require('mongoose');
var schema = mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    lastname: {
        type: string,
        required: true,
    },
    phoneno: {
        type: string
    }
});

var user = mongoose.model('user', schema);
module.exports = user;