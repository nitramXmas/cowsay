const wilderInfo = require('./information');

var cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: `I am ${wilderInfo.myName} and I am learning nodeJS in ${wilderInfo.myCampus}`,
    e: 'oO',
    T: 'U ',
  })
);
