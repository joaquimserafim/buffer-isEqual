var test = require('assert');

var isEqual = require('../');


console.log('Running tests...');

var buffer_a = new Buffer(32);
var buffer_b = new Buffer(64);

var not_equal = isEqual(buffer_a, buffer_b);

test.notEqual(not_equal, true, 'This should return not equal because the two buffers are diffent');


var some_str = 'Node.js is a platform built on Chrome\'s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.';

var buffer_c = new Buffer(some_str);
var buffer_d = new Buffer(some_str);


var equal = isEqual(buffer_c, buffer_d);

test.equal(equal, true, 'This should return equal because the two buffers are equal');


console.log('finish.');