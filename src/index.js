import React from 'react';
import ReactDOM from 'react-dom';
// importanto um módulo do 'app'
// var sum = require('./app')
// alert('Soma: ' + sum(1,2))

var Title = require('./app')

ReactDOM.render(
    React.createElement(Title),
     document.querySelector('[data-js="app"]')
);