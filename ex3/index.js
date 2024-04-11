const moment = require('moment');

const currentDate = moment().format('dddd, MMMM Do YYYY');
console.log(currentDate);

const startDate = moment('1976-11-26');
const yearsSince = moment().diff(startDate, 'years');
console.log(`${yearsSince} years ago`);
