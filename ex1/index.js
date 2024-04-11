const circleNew = require("./circle.js");

const radius = 3;
const circumferenceNew = circleNew.circumference(radius);

const areaNew = circleNew.area(radius);

console.log(`The circumference of a circle of radius ${radius} is ${circumferenceNew}`);
console.log(`Its area is ${areaNew}`);