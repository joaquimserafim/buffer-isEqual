# buffer-isEqual

<a href="https://nodei.co/npm/buffer-isequal/"><img src="https://nodei.co/npm/buffer-isequal.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/buffer-isEqual.png?branch=master)](https://travis-ci.org/joaquimserafim/buffer-isEqual)


verify if two buffers are equal



**V1**

    var bisEqual = require('buffer-isequal');
    
    var str = 'Node.js is a platform built on Chrome\'s JavaScript runtime.';
    
    var buffer_c = new Buffer(str);
    var buffer_d = new Buffer(str);
    
    
    var equal = bisEqual(buffer_c, buffer_d);